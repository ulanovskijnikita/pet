import { makeAutoObservable, runInAction } from "mobx";
import GetProductByFavouriteUseCase from "../../../domain/usecase/GetProductByFavouriteUseCase";
import { DEFAULT_LIMIT } from "../constants/defaultLimit";
import AppStater from "./appViewModel/AppStater";
import Product, { ProductId } from "../../../domain/model/product/Product";
import { DEFAULT_OFFSET } from "../constants/defaultOffset";
import { DEFAULT_QUANTITY } from "../constants/defaultQuantity";
import AddToUserCartUseCase from "../../../domain/usecase/AddToUserCartUseCase";
import ToggleUserFavouriteUseCase from "../../../domain/usecase/ToggleUserFavouriteUseCase";
import NavStater from "./navViewModel/NavStater";

export default class FavouriteViewModel {

    constructor(

        private navStater: NavStater,
        private appStater: AppStater,
        private getProductByFavouriteUseCase: GetProductByFavouriteUseCase,
        private addToUserCartUseCase: AddToUserCartUseCase,
        private toggleUserFavouriteUseCase: ToggleUserFavouriteUseCase,
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
                userId: this.appStater.getId
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