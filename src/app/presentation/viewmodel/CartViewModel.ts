import { makeAutoObservable, runInAction } from "mobx";
import GetUserCartUseCase from "../../../domain/usecase/GetUserCartUserCase";
import UserCart from "../../../domain/model/user/UserCart";
import { UserId } from "../../../domain/model/user/User";
import SetQuantityCartProductUseCase from "../../../domain/usecase/SetQuantityCartProductUseCase";
import SetQuantityCartProductParam from "../../../data/storage/model/user/SetQuantityCartProductParam";
import ChangeQuantityCartProductUseCase from "../../../domain/usecase/ChangeQuantityCartProductUseCase";
import AppViewModel from "../../AppViewModel";
import GetAnOrderUseCase from "../../../domain/usecase/GetAnOrderUseCase";

export default class CartViewModel {

    constructor(

        private getUserCartUseCase: GetUserCartUseCase,
        private setQuantityCartProductUseCase: SetQuantityCartProductUseCase,
        private changeQuantityCartProductUseCase: ChangeQuantityCartProductUseCase,
        private appViemModel: AppViewModel,
        private getAnOrderUseCase: GetAnOrderUseCase,
    ) {

        makeAutoObservable(this)
    }

    private userCart: UserCart[] = []

    get getCartPrice() {

        const genetalObj = this.userCart.map((product) => {

            const price = (product.priceCount * product.quantity)

            return price
        })

        return genetalObj.reduce((prev, current) => {

            return prev + current
        })
    }

    get getUserCart() {
    
        return this.userCart
    }

    set setAnOrder(id: UserId) {

        this.getAnOrderUseCase
            .execute(id)
            .then(

                userCartPreview => {

                    runInAction(

                        () => {

                            this.appViemModel.setCartId = userCartPreview.cartId

                            this.appViemModel.setCartLength = userCartPreview.cartLength
                        }
                    )
                }
            )
    }

    set setUserCart(id: UserId) {

        this.getUserCartUseCase
            .execute(id)
            .then(

                userCart => {

                    runInAction(

                        () => {

                            this.userCart = userCart
                        }
                    )
                }
            )
    }

    set setQuantityCartProduct(param: SetQuantityCartProductParam) {

        this.setQuantityCartProductUseCase
            .execute(param)
            .then(

                quantityRes => {

                    runInAction(

                        () => {

                            this.appViemModel.setCartLength = quantityRes.length

                            if (quantityRes.quantity > 0) {

                                this.userCart[param.index].quantity = quantityRes.quantity
                            } else {

                                this.userCart.splice(param.index, 1)
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

                            this.appViemModel.setCartLength = quantityRes.length

                            if (quantityRes.quantity > 0) {

                                this.userCart[param.index].quantity = quantityRes.quantity
                            } else {

                                this.userCart.splice(param.index, 1)
                            }                            
                        }
                    )
                }
            )
    }
}