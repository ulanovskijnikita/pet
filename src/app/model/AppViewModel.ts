import { makeAutoObservable, runInAction } from "mobx";
import GetUserUseCase from "../../entities/user/usecase/GetUserUseCase";
import { UserId } from "../../shared/model/entities/User";
import AppStater from "./AppStater";
import Cart, { CartPrice, CartProductQuantity } from "../../shared/model/entities/Cart";
import GetProgressCartUseCase from "../../entities/cart/usecase/GetProgressCartUseCase";
import Product, { ProductId, ProductIsFavorites } from "../../shared/model/entities/Product";
import AppCart from "./AppCart";

export default class AppViewModel implements AppStater {

    constructor(

        private getUserUseCase: GetUserUseCase,
        private getProgressCartUseCase: GetProgressCartUseCase,
    ) {

        makeAutoObservable(this)
    }

    private userId: UserId | null = null

    private cart: AppCart = null

    get getUserId() {

        return this.userId
    }

    get getCart() {

        return this.cart
    }

    *setProfile() {
    
        const user = this.getUserUseCase.execute()

        if (user) {

            const cart: Cart = yield this.getProgressCartUseCase.execute( user.id )

            const cartProductIds = cart.products.map(({ product }) => product.id)

            runInAction(

                () => {

                    this.userId = user.id
                    this.cart = {
                        
                        ...cart,
                        cartProductIds:cartProductIds,
                    }
                }
            )
        } else {

            runInAction(

                () => {

                    this.userId = null
                    this.cart = null
                }
            )
        }
    }

    setFavoutiteCartProduct(id: ProductId, isFavourites: ProductIsFavorites): void {
        
        const favouriteCartProductIndex = this.cart!.products.findIndex(product => product.product.id == id)

        if ( favouriteCartProductIndex !== -1 ) runInAction(

            () => {

                this.cart!.products[ favouriteCartProductIndex ].product.isFavorites = isFavourites
            }
        ) 
    }

    setProductQuantity(product: Product, q: CartProductQuantity, price: CartPrice, productIndex?: number): void {

        runInAction(

            () => {
                
                this.cart!.price = price

                if ( !productIndex ) productIndex = this.cart!.products.findIndex(({ product: prod }) => prod.id === product.id)

                if ( q < 1 ) {

                    const [ splicedProduct ] = this.getCart!.products.splice(productIndex, 1)

                    this.cart!.cartLength -= splicedProduct.q

                    this.cart!.cartProductIds.splice(productIndex, 1)

                    console.log(this.cart)

                    return
                }

                if ( productIndex == -1 ) {

                    this.cart!.products.push({

                        product: product,
                        q: q,
                    })
                } else {

                    this.cart!.products[ productIndex ].product = product
                    this.cart!.products[ productIndex ].q = q
                }

                this.cart!.cartProductIds.push( product.id )
                this.cart!.cartLength += q
            }
        )
    }

    setCart(cart: AppCart): void {
        
        this.cart = cart
    }

    signOut() {

        runInAction(() => {

            this.cart = null

            this.userId = null
        })
    }
}