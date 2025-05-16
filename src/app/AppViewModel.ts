import { makeAutoObservable, runInAction } from "mobx";
import User, { UserId } from "../domain/model/user/User";
import GetUserUseCase from "../domain/usecase/GetUserUseCase";
import ToggleUserFavouriteUseCase from "../domain/usecase/ToggleUserFavouriteUseCase";
import Product, { ProductId } from "../domain/model/product/Product";
import GetUserCartLength from "../domain/usecase/GetUserCartLength";

export type ToggleFavouriteProductParam = {

    userId: UserId
    productId: ProductId
    list: Product[]
}

export default class AppViewModel {

    constructor(

        private getUserUseCase: GetUserUseCase,
        private toggleUserFavouriteUseCase: ToggleUserFavouriteUseCase,
        private getUserCartLength: GetUserCartLength,
    ) {

        makeAutoObservable(this)
        this.setUser()
    }

    private user: User | null = null

    private cartLength: number = 0

    get getCartLength() {

        return this.cartLength
    }

    set setCartLength(id: UserId) {

        this.getUserCartLength
            .execute(id)
            .then(

                (length) =>
                    runInAction(

                        () =>
                            this.cartLength = length
                    )
            )
    }

    get getUser() {

        return this.user
    }

    setUser() {

        runInAction(

            () => {

                this.user = this.getUserUseCase.execute()
                
                this.setCartLength = this.user?.id ?? 0
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
}