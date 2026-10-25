import { makeAutoObservable, runInAction } from "mobx";
import GetProductsByCartUseCaseRes from "../../../entities/product/model/res/GetProductsByCartUseCaseRes";
import AppStater from "../../../app/model/AppStater";
import { ProductId, ProductRating } from "../../../shared/model/entities/Product";
import AddToProgressCartUseCase from "../../../entities/cart/usecase/SetProductQuantityUseCase";
import NavStater from "../../../widgets/nav/model/NavStater";
import ToggleFavouriteProductUseCase from "../../../entities/user/usecase/ToggleFavouriteProductUseCase";
import GetProductsByCartUseCase from "../../../entities/product/usecase/GetProductsByCartUseCase";
import SetProductRatingUseCase from "../../../entities/product/usecase/SetProductRatingUseCase";
import { CartId } from "../../../shared/model/entities/Cart";
import DEFAULT_PRODUCT_QUANTITY from "../../../entities/product/const/defaultProductQuantity";

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

        return this.appStater.getUserId
    }

    set setOrder(cartId: CartId) {

        this.order = null

        if(cartId) {

            this.getProductsByCartUseCase
                .execute({

                    cartId: cartId,
                    userId: this.appStater.getUserId ?? 0
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
                userId: this.appStater.getUserId,
            })
            .then(

                (res) => {

                    runInAction(

                        () => {

                            if (this.order) {

                                this.order[param.index].userRating = res.userRating

                                this.order[param.index].rating = res.productRating
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
                quantity: DEFAULT_PRODUCT_QUANTITY,
                cartId: this.appStater.getCart!.id
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

                isFavourite => {

                    runInAction(
                        
                        () => {

                            if (this.order) this.order[index].isFavorites = isFavourite

                            this.appStater.setFavoutiteCartProduct(id, isFavourite)
                        }
                    )
                }
            )
    }
}