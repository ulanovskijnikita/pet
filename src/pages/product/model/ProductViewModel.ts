import { makeAutoObservable, runInAction } from "mobx";
import ProductDetails from "../../../entities/product/model/ProductDetails";
import SetQuantityCartProductParam from "../../../entities/user/model/param/SetQuantityCartProductParam";
import { ProductId } from "../../../shared/model/entities/Product";
import AppStater from "../../../app/model/AppStater";
import ToggleFavouriteProductUseCase from "../../../entities/user/usecase/ToggleFavouriteProductUseCase";
import AddToProgressCartUseCase from "../../../entities/cart/usecase/SetProductQuantityUseCase";
import NavStater from "../../../widgets/nav/model/NavStater";
import GetProductByIdUseCase from "../../../entities/product/usecase/GetProductByIdUseCase";
import { CartProductQuantity } from "../../../shared/model/entities/Cart";
import DEFAULT_PRODUCT_QUANTITY from "../../../entities/product/const/defaultProductQuantity";

export default class ProductViewModel {

    constructor(

        private appStater: AppStater,
        private navStater: NavStater,
        private getProductByIdUseCase: GetProductByIdUseCase,
        private toggleFavouriteProductUseCase: ToggleFavouriteProductUseCase,
        private addToProgressCartUseCase: AddToProgressCartUseCase,
    ) {

        makeAutoObservable(this)
    }

    private productDetails: ProductDetails | null = null

    private loaded: boolean = false

    private productQuantity: CartProductQuantity = DEFAULT_PRODUCT_QUANTITY

    private isCartInclude: boolean = false

    get getIsCartInclude() {

        return this.isCartInclude
    }

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

        return this.appStater.getUserId
    }

    get getCart() {

        return this.appStater.getCart
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
                    userId: this.appStater.getUserId
                })
                .then(

                    (productDetails) => {

                        runInAction(

                            () => {

                                this.productDetails = null

                                this.loaded = false

                                this.isCartInclude = false
                                
                                this.productDetails = productDetails

                                console.log(this.appStater.getCart!.cartProductIds)

                                if ( this.appStater.getCart!.cartProductIds.includes( productDetails!.id ) ) this.isCartInclude = true
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

        this.addToProgressCartUseCase
            .execute({

                productId: this.productDetails.id,
                quantity: this.productQuantity,
                cartId: this.appStater.getCart!.id
            })
            .then(

                res => {

                    runInAction(

                        () => {

                            this.navStater.changeCartLength(res.length)

                            this.appStater.setProductQuantity(res.product, res.currentQuantity, res.price)
                        }
                    )
                }
                
            )
    }

    toggleFavourite() {

        if (!this.productDetails) return

        this.toggleFavouriteProductUseCase
            .execute({

                productId: this.productDetails.id,
                userId: this.getId
            })
            .then(

                isFavourite => {

                    runInAction(
                        
                        () => {

                            if (this.productDetails) this.productDetails.isFavorites = isFavourite

                            this.appStater.setFavoutiteCartProduct(this.productDetails!.id, isFavourite)
                        }
                    )
                }
            )
    }

    unsetProductDetails() {

        this.productDetails = null
    }
}