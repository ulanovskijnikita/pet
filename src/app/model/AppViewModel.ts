import { makeAutoObservable, runInAction } from "mobx";
import GetUserUseCase from "../../entities/user/usecase/GetUserUseCase";
import { UserId } from "../../shared/model/entities/User";
import AppStater from "./AppStater";
import Cart from "../../shared/model/entities/Cart";
import GetProgressCartUseCase from "../../entities/cart/usecase/GetProgressCartUseCase";
import { ProductId, ProductIsFavorites } from "../../shared/model/entities/Product";

export default class AppViewModel implements AppStater {

    constructor(

        private getUserUseCase: GetUserUseCase,
        private getProgressCartUseCase: GetProgressCartUseCase,
    ) {

        makeAutoObservable(this)
    }

    setFavoutiteCartProduct(id: ProductId, isFavourites: ProductIsFavorites): void {
        
        const favouriteCartProductIndex = this.cart?.products.findIndex(product => product.product.id == id)

        if ( favouriteCartProductIndex ) this.cart!.products[ favouriteCartProductIndex ].product.isFavorites = isFavourites
    }

    private userId: UserId | null = null

    private cart: Cart | null = null

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

            runInAction(

                () => {

                    this.userId = user.id
                    this.cart = cart
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
}