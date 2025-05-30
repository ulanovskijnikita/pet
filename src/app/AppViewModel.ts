import { makeAutoObservable, runInAction } from "mobx";
import User, { UserId, UserStatus } from "../domain/model/user/User";
import GetUserUseCase from "../domain/usecase/GetUserUseCase";
import ToggleUserFavouriteUseCase from "../domain/usecase/ToggleUserFavouriteUseCase";
import Product, { ProductId, ProductTag } from "../domain/model/product/Product";
import AddToUserCartUseCase from "../domain/usecase/AddToUserCartUseCase";
import AddToUserCartParam from "../domain/model/user/AddToUserCartParam";
import { UserCartLength, UserProgressCartId } from "../domain/model/user/UserCartPreview";

export type ToggleFavouriteProductParam = {

    userId: UserId
    productId: ProductId
    productIndex: number
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

    private searchTag: ProductTag = ''

    get getSearchTag() {

        return this.searchTag
    }

    set setSearchTag(tag: ProductTag) {

        this.searchTag = tag
    }

    set setCartLength(length: UserCartLength) {

        this.user!.cartLength = length
    }

    set setCartId(id: UserProgressCartId) {

        this.user!.cartId = id
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

                isFavourite => {
                
                    runInAction(

                        () => {
                            
                            param.list[param.productIndex].isFavorites = isFavourite
                        }
                    )
                }
            )
    }

    set setUserStatus(status: UserStatus) {

        this.user!.status = status
    }
}