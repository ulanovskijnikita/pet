import { makeAutoObservable, runInAction } from "mobx";
import { DEFAULT_LIMIT } from "../../../shared/config/defaultLimit";
import AppStater from "../../../app/model/AppStater";
import Product, { ProductId } from "../../../shared/model/entities/Product";
import { DEFAULT_OFFSET } from "../../../shared/config/defaultOffset";
import AddToProgressCartUseCase from "../../../entities/cart/usecase/SetProductQuantityUseCase";
import ToggleFavouriteProductUseCase from "../../../entities/user/usecase/ToggleFavouriteProductUseCase";
import NavStater from "../../../widgets/nav/model/NavStater";
import GetProductByFavouriteUseCase from "../../../entities/product/usecase/GetProductByFavouriteUseCase";
import DEFAULT_PRODUCT_QUANTITY from "../../../entities/product/const/defaultProductQuantity";

export default class FavouriteViewModel {

    constructor(

        private navStater: NavStater,
        private appStater: AppStater,
        private getProductByFavouriteUseCase: GetProductByFavouriteUseCase,
        private addToProgressCartUseCase: AddToProgressCartUseCase,
        private toggleUserFavouriteUseCase: ToggleFavouriteProductUseCase,
    ) {

        makeAutoObservable(this)
    }

    private product: Product[] | null = null

    private hasMoreProduct = true

    get getProduct() {

        return this.product
    }

    get getHasMoreProduct() {

        return this.hasMoreProduct
    }

    setProduct() {

        const offset = this.product?.length ?? DEFAULT_OFFSET
        
        this.getProductByFavouriteUseCase
            .execute({
                
                id: this.appStater.getUserId,
                limit: DEFAULT_LIMIT,
                offset: offset,
            })
            .then(

                (product) => {

                    runInAction(

                        () => {

                            this.hasMoreProduct = product.length < DEFAULT_LIMIT ? false : true

                            if (offset != DEFAULT_OFFSET && this.product) {

                                this.product = [...this.product, ...product]

                                return
                            }

                            this.product = product
                        }
                    )
                }
            )
    }

    set addToUserCart(id: ProductId) {
        
        this.addToProgressCartUseCase
            .execute({

                productId: id,
                quantity: DEFAULT_PRODUCT_QUANTITY,
                cartId: this.appStater.getCart!.id
            })
            .then(

                (cartLength) => {

                    runInAction(

                        () => {

                            this.navStater.changeCartLength(cartLength)
                        }
                    )
                }
            )
    }

    toggleFavourite(id: ProductId, index: number) {

        this.toggleUserFavouriteUseCase
            .execute({

                productId: id,
                userId: this.appStater.getUserId
            })
            .then(

                (isFavourite) => {

                    runInAction(

                        () => {

                            if( this.product ) this.product.splice(index, 1)

                            this.appStater.setFavoutiteCartProduct(id, isFavourite)
                        }
                    )
                }
            )
    }

    unsetProduct() {

        this.product = null
    }
}