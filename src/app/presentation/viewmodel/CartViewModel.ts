import { makeAutoObservable, runInAction } from "mobx";
import GetProgressCartUseCase from "../../../entities/cart/usecase/GetProgressCartUseCase";
import Cart from "../../../entities/cart/model/Cart";
import SetCartLengthUseCase from "../../../entities/cart/usecase/SetCartLengthUseCase";
import SetQuantityCartProductParam from "../../../entities/user/model/param/SetQuantityCartProductParam";
import ChangeQuantityCartProductUseCase from "../../../entities/cart/usecase/ChangeQuantityCartProductUseCase";
import MakeOrderUseCase from "../../../entities/cart/usecase/MakeOrderUseCase";
import NavStater from "./navViewModel/NavStater";
import ToggleFavouriteProductUseCase from "../../../entities/user/usecase/ToggleFavouriteProductUseCase";
import { ProductId } from "../../../entities/product/model/Product";
import AppStater from "./appViewModel/AppStater";

export default class CartViewModel {

    constructor(

        private navStater: NavStater,
        private appStater: AppStater,
        private getUserCartUseCase: GetProgressCartUseCase,
        private setQuantityCartProductUseCase: SetCartLengthUseCase,
        private changeQuantityCartProductUseCase: ChangeQuantityCartProductUseCase,
        private getAnOrderUseCase: MakeOrderUseCase,
        private toggleUserFavouriteUseCase: ToggleFavouriteProductUseCase,
    ) {

        makeAutoObservable(this)
    }

    private userCart: Cart[] | null = null

    get getCartPrice() {

        const genetalObj = this.userCart?.map((product) => {

            const price = (product.priceCount * product.quantity)

            return price
        })

        return genetalObj?.reduce((prev, current) => {

            return prev + current
        })
    }

    get getUserCart() {
    
        return this.userCart
    }

    get getId() {

        return this.appStater.getId
    }

    setAnOrder() {

        this.getAnOrderUseCase
            .execute(this.getId)
            .then(

                userCartPreview => {

                    runInAction(

                        () => {

                            this.navStater.changeCartLength( userCartPreview.cartLength )
                        }
                    )
                }
            )
    }

    *setUserCart() {

        this.userCart = null

        const userCart: Cart[] = yield this.getUserCartUseCase.execute( this.getId )
        
        this.userCart = userCart
    }

    set setQuantityCartProduct(param: SetQuantityCartProductParam) {

        this.setQuantityCartProductUseCase
            .execute(param)
            .then(

                quantityRes => {

                    runInAction(

                        () => {

                            this.navStater.changeCartLength( quantityRes.length )

                            if (quantityRes.quantity > 0) {

                                if (this.userCart) this.userCart[param.index].quantity = quantityRes.quantity
                            } else {

                                if(this.userCart) this.userCart.splice(param.index, 1)
                            }                            
                        }
                    )
                }
            )
    }

    set changeQuantityCartProduct(param: SetQuantityCartProductParam) {

        this.changeQuantityCartProductUseCase
            .execute(param)
            .then(

                quantityRes => {

                    runInAction(

                        () => {

                            this.navStater.changeCartLength( quantityRes.length )

                            if (quantityRes.quantity > 0) {

                                if (this.userCart) this.userCart[param.index].quantity = quantityRes.quantity
                            } else {

                                if (this.userCart) this.userCart.splice(param.index, 1)
                            }                            
                        }
                    )
                }
            )
    }

    toggleFavourite(id: ProductId, index: number) {
    
        this.toggleUserFavouriteUseCase
            .execute({

                productId: id,
                userId: this.getId
            })
            .then(

                bool => {

                    runInAction(
                        
                        () => {

                            if (this.userCart) this.userCart[index].isFavorites = bool
                        }
                    )
                }
            )
    }
}