import { makeAutoObservable, runInAction } from "mobx";
import GetUserCartUseCase from "../../../domain/usecase/GetUserCartUseCase";
import UserCart from "../../../domain/model/user/UserCart";
import SetQuantityCartProductUseCase from "../../../domain/usecase/SetQuantityCartProductUseCase";
import SetQuantityCartProductParam from "../../../domain/model/user/SetQuantityCartProductParam";
import ChangeQuantityCartProductUseCase from "../../../domain/usecase/ChangeQuantityCartProductUseCase";
import GetAnOrderUseCase from "../../../domain/usecase/GetAnOrderUseCase";
import NavStater from "./navViewModel/NavStater";
import ToggleUserFavouriteUseCase from "../../../domain/usecase/ToggleUserFavouriteUseCase";
import { ProductId } from "../../../domain/model/product/Product";
import AppStater from "./appViewModel/AppStater";

export default class CartViewModel {

    constructor(

        private navStater: NavStater,
        private appStater: AppStater,
        private getUserCartUseCase: GetUserCartUseCase,
        private setQuantityCartProductUseCase: SetQuantityCartProductUseCase,
        private changeQuantityCartProductUseCase: ChangeQuantityCartProductUseCase,
        private getAnOrderUseCase: GetAnOrderUseCase,
        private toggleUserFavouriteUseCase: ToggleUserFavouriteUseCase,
    ) {

        makeAutoObservable(this)
    }

    private userCart: UserCart[] | null = null

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

        const userCart: UserCart[] = yield this.getUserCartUseCase.execute( this.getId )
        
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