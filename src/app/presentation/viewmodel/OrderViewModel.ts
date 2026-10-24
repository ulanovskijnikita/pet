import { makeAutoObservable, runInAction } from "mobx";
import GetProductsByCartUseCaseRes from "../../../entities/product/model/res/GetProductsByCartUseCaseRes";
import GetProductsByCartUseCase from "../../../domain/usecase/GetProductsByCartUseCase";
import SetProductRatingUseCase from "../../../domain/usecase/SetProductRatingUseCase";
import { CartId } from "../../../entities/cart/model/CartPreview";
import AppStater from "./appViewModel/AppStater";
import { ProductId, ProductRating } from "../../../entities/product/model/Product";
import AddToProgressCartUseCase from "../../../entities/cart/usecase/SetProductQuantityUseCase";
import { DEFAULT_QUANTITY } from "../../../entities/cart/model/param/SetProductQuantityParam";
import NavStater from "./navViewModel/NavStater";
import ToggleFavouriteProductUseCase from "../../../entities/user/usecase/ToggleFavouriteProductUseCase";

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
        private addToUserCartUseCase: AddToProgressCartUseCase,
        private toggleUserFavouriteUseCase: ToggleFavouriteProductUseCase,
    ) {

        makeAutoObservable(this)
    }

    private order: GetProductsByCartUseCaseRes[] | null = null

    get getOrder() {

        return this.order
    }

    get getId() {

        return this.appStater.getId
    }

    set setOrder(cartId: CartId | null) {

        this.order = null

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

            this.order = []
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
                cartId: this.appStater.getId
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