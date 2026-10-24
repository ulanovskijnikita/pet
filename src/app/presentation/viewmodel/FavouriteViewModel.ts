import { makeAutoObservable, runInAction } from "mobx";
import GetProductByFavouriteUseCase from "../../../domain/usecase/GetProductByFavouriteUseCase";
import { DEFAULT_LIMIT } from "../constants/defaultLimit";
import AppStater from "../../model/AppStater";
import Product, { ProductId } from "../../../shared/model/entities/Product";
import { DEFAULT_OFFSET } from "../constants/defaultOffset";
import { DEFAULT_QUANTITY } from "../constants/defaultQuantity";
import AddToProgressCartUseCase from "../../../entities/cart/usecase/SetProductQuantityUseCase";
import ToggleFavouriteProductUseCase from "../../../entities/user/usecase/ToggleFavouriteProductUseCase";
import NavStater from "./navViewModel/NavStater";

export default class FavouriteViewModel {

    constructor(

        private navStater: NavStater,
        private appStater: AppStater,
        private getProductByFavouriteUseCase: GetProductByFavouriteUseCase,
        private addToUserCartUseCase: AddToProgressCartUseCase,
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
                
                id: this.appStater.getId,
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
        
        this.addToUserCartUseCase
            .execute({

                productId: id,
                quantity: DEFAULT_QUANTITY,
                cartId: this.appStater.getId
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
                userId: this.appStater.getId
            })
            .then(

                () => {

                    runInAction(

                        () => {

                            if( this.product ) this.product.splice(index, 1)
                        }
                    )
                }
            )
    }

    unsetProduct() {

        this.product = null
    }
}