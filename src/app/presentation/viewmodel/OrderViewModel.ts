import { makeAutoObservable, runInAction } from "mobx";
import GetProductsByCartRes from "../../../domain/model/product/GetProductsByCartRes";
import GetProductsByCartUseCase from "../../../domain/usecase/GetProductsByCartUseCase";
import SetProductRatingUseCase from "../../../domain/usecase/SetProductRatingUseCase";
import { UserCartId } from "../../../domain/model/user/UserCartPreview";
import AppStater from "./appViewModel/AppStater";
import { ProductId, ProductRating } from "../../../domain/model/product/Product";
import AddToUserCartUseCase from "../../../domain/usecase/AddToUserCartUseCase";
import { DEFAULT_QUANTITY } from "../../../domain/model/user/AddToUserCartParam";
import NavStater from "./navViewModel/NavStater";
import ToggleUserFavouriteUseCase from "../../../domain/usecase/ToggleUserFavouriteUseCase";

type SetProductRatingParam = {

    index: number
    productId: ProductId
    rating: ProductRating
}

export default class OrderViewModel {

    constructor(

        private appStater: AppStater,
        private navStater: NavStater,
        private getProductsByCartUseCase: GetProductsByCartUseCase,
        private setProductRatingUseCase: SetProductRatingUseCase,
        private addToUserCartUseCase: AddToUserCartUseCase,
        private toggleUserFavouriteUseCase: ToggleUserFavouriteUseCase,
    ) {

        makeAutoObservable(this)
    }

    private order: GetProductsByCartRes[] | null = null

    get getOrder() {

        return this.order
    }

    get getId() {

        return this.appStater.getId
    }

    set setOrder(cartId: UserCartId | null) {

        if(cartId) {

            this.getProductsByCartUseCase
                .execute({

                    cartId: cartId,
                    userId: this.appStater.getId
                })
                .then(

                    (res) => {

                        runInAction(

                            () => {

                                this.order = res
                            }
                        )
                    }
                )
        } else {

            this.order = null
        }
    }

    unsetOrder() {

        this.order = null
    }

    set setProductRating(param: SetProductRatingParam) {
    
        this.setProductRatingUseCase
            .execute({

                ...param,
                userId: this.appStater.getId,
            })
            .then(

                (res) => {

                    runInAction(

                        () => {

                            if (this.order) {

                                this.order[param.index].userRating = res.userRating

                                this.order[param.index].rating = res.prodyctRating
                            }
                        }
                    )
                }
            )
    }

    set addToCart(id: ProductId) {

        this.addToUserCartUseCase
            .execute({

                productId: id,
                quantity: DEFAULT_QUANTITY,
                userId: this.appStater.getId
            })
            .then(

                (q) => {

                    runInAction(

                        () => {

                            this.navStater.changeCartLength(q)
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

                            if (this.order) this.order[index].isFavorites = bool
                        }
                    )
                }
            )
    }
}