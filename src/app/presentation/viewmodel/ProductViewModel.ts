import { makeAutoObservable, runInAction } from "mobx";
import GetProductByIdUseCase from "../../../domain/usecase/GetProductByIdUseCase";
import ProductDetails from "../../../domain/model/product/ProductDetails";
import { DEFAULT_QUANTITY, ProductQuantity } from "../../../domain/model/user/AddToUserCartParam";
import SetQuantityCartProductParam from "../../../data/storage/model/user/SetQuantityCartProductParam";
import { ProductId } from "../../../domain/model/product/Product";
import AppStater from "./appViewModel/AppStater";
import ToggleUserFavouriteUseCase from "../../../domain/usecase/ToggleUserFavouriteUseCase";
import AddToUserCartUseCase from "../../../domain/usecase/AddToUserCartUseCase";
import NavStater from "./navViewModel/NavStater";

export default class ProductViewModel {

    constructor(

        private appStater: AppStater,
        private navStater: NavStater,
        private getProductByIdUseCase: GetProductByIdUseCase,
        private toggleUserFavouriteUseCase: ToggleUserFavouriteUseCase,
        private addToUserCartUseCase: AddToUserCartUseCase,
    ) {

        makeAutoObservable(this)
    }

    private productDetails: ProductDetails | null = null

    private productQuantity: ProductQuantity = DEFAULT_QUANTITY

    get getProductQuantity() {

        return this.productQuantity
    }

    get getProductDetails() {

        return this.productDetails
    }

    get getId() {

        return this.appStater.getId
    }

    set setProductQuantity(param: SetQuantityCartProductParam) {

        this.productQuantity += param.quantity
    }

    set changeProductQuantity(param: SetQuantityCartProductParam) {

        if ( param.quantity > 0 ) this.productQuantity = param.quantity
    }

    set setProductDetails(id: ProductId | null) {

        if (id) {

            this.getProductByIdUseCase
                .execute({

                    productId: id,
                    userId: this.appStater.getId
                })
                .then(

                    (productDetails) => {

                        runInAction(

                            () => {

                                this.productDetails = productDetails
                            }
                        )
                    }
                )
        } else {

            this.productDetails = null
        }        
    }

    addToCart() {

        if (!this.productDetails) return

        this.addToUserCartUseCase
            .execute({

                productId: this.productDetails?.id,
                quantity: this.productQuantity,
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

    toggleFavourite() {

        if (!this.productDetails) return

        this.toggleUserFavouriteUseCase
            .execute({

                productId: this.productDetails.id,
                userId: this.getId
            })
            .then(

                bool => {

                    runInAction(
                        
                        () => {

                            if (this.productDetails) this.productDetails.isFavorites = bool
                        }
                    )
                }
            )
    }

    unsetProductDetails() {

        this.productDetails = null
    }
}