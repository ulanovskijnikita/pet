import { makeAutoObservable, runInAction } from "mobx";
import User, { UserId, UserStatus } from "../domain/model/user/User";
import GetUserUseCase from "../domain/usecase/GetUserUseCase";
import ToggleUserFavouriteUseCase from "../domain/usecase/ToggleUserFavouriteUseCase";
import Product, { ProductId } from "../domain/model/product/Product";
import AddToUserCartUseCase from "../domain/usecase/AddToUserCartUseCase";
import AddToUserCartParam from "../domain/model/user/AddToUserCartParam";
import { UserCartLength } from "../domain/model/user/UserCart";

export type ToggleFavouriteProductParam = {

    userId: UserId
    productId: ProductId
    list: Product[]
}

export default class AppViewModel {

    constructor(

        private getUserUseCase: GetUserUseCase,
        private toggleUserFavouriteUseCase: ToggleUserFavouriteUseCase,
        private addToUserCartUseCase: AddToUserCartUseCase,
    ) {

        makeAutoObservable(this)

        this.setUser()
    }

    private user: User | null = null

    set setCartLength(length: UserCartLength) {

        this.user!.cartLength = length
    }

    get getUser() {

        return this.user
    }

    setUser() {

        runInAction(

            () => {

                this.user = this.getUserUseCase.execute()
            }
        )
    }

    addToCart(param: AddToUserCartParam) {

        this.addToUserCartUseCase
            .execute(param)
            .then(

                (length) => {

                    runInAction(

                        () => {

                            this.setCartLength = length
                        }
                    )
                }
        )
    }

    
    set toggleFavouriteProduct(param: ToggleFavouriteProductParam) {

        this.toggleUserFavouriteUseCase
            .execute(param)
            .then(

                isFavourite => 
                    runInAction(

                        () => 
                            param.list[param.productId - 1].isFavorites = isFavourite
                    )
            )
    }

    set setUserStatus(status: UserStatus) {

        this.user!.status = status
    }
}