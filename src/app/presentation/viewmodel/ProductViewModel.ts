import { makeAutoObservable, runInAction } from "mobx";
import GetProductByIdUseCase from "../../../domain/usecase/GetProductByIdUseCase";
import ProductDetails from "../../../entites/product/model/ProductDetails";
import { DEFAULT_QUANTITY, ProductQuantity } from "../../../entites/cart/model/param/AddToProgressCartUseCaseParam";
import SetQuantityCartProductParam from "../../../entites/user/model/param/SetQuantityCartProductParam";
import { ProductId } from "../../../entites/product/model/Product";
import AppStater from "./appViewModel/AppStater";
import ToggleFavouriteProductUseCase from "../../../entites/user/usecase/ToggleFavouriteProductUseCase";
import AddToProgressCartUseCase from "../../../entites/cart/usecase/AddToProgressCartUseCase";
import NavStater from "./navViewModel/NavStater";

export default class ProductViewModel {

    constructor(

        private appStater: AppStater,
        private navStater: NavStater,
        private getProductByIdUseCase: GetProductByIdUseCase,
        private toggleUserFavouriteUseCase: ToggleFavouriteProductUseCase,
        private addToUserCartUseCase: AddToProgressCartUseCase,
    ) {

        makeAutoObservable(this)
    }

    private productDetails: ProductDetails | null = null

    private loaded: boolean = false

    private productQuantity: ProductQuantity = DEFAULT_QUANTITY

    get getProductQuantity() {

        return this.productQuantity
    }

    get getLoaded() {

        return this.loaded
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

        this.loaded = true

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

                                this.loaded = false
                                
                                this.productDetails = productDetails
                            }
                        )
                    }
                )
        } else {

            runInAction(() => {

                this.loaded = false

                this.productDetails = null
            })
        }        
    }

    addToCart() {

        if (!this.productDetails) return

        this.addToUserCartUseCase
            .execute({

                productId: this.productDetails?.id,
                quantity: this.productQuantity,
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