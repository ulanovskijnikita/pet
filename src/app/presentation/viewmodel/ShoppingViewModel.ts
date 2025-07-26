import { makeAutoObservable, runInAction } from "mobx"
import { ProductCategoryId } from "../../../domain/model/product/ProductCategory"
import { ProductSubcategoryId } from "../../../domain/model/product/ProductSubcategory"
import GetProductByFilterUseCase from "../../../domain/usecase/GetProductByFilterUseCase"
import { ProductOrderId } from "../../../domain/model/product/ProductOrder"
import Product, { ProductId } from "../../../domain/model/product/Product"
import { DEFAULT_OFFSET } from "../constants/defaultOffset"
import NavStater from "./navViewModel/NavStater"
import { DEFAULT_LIMIT } from "../constants/defaultLimit"
import AppStater from "./appViewModel/AppStater"
import AddToUserCartUseCase from "../../../domain/usecase/AddToUserCartUseCase"
import { DEFAULT_QUANTITY } from "../constants/defaultQuantity"
import ToggleUserFavouriteUseCase from "../../../domain/usecase/ToggleUserFavouriteUseCase"

export default class ShoppingViewModel {

    constructor(

        private navStater: NavStater,
        private appStater: AppStater,
        private getProductByFilterUseCase: GetProductByFilterUseCase,
        private addToUserCartUseCase: AddToUserCartUseCase,
        private toggleUserFavouriteUseCase: ToggleUserFavouriteUseCase,
    ) {

        makeAutoObservable(this)
    }

    private product: Product[] | null = null

    private hasMoreProduct = true

    private category: ProductCategoryId = 1

    private subcategory: ProductSubcategoryId = 1

    private order: ProductOrderId = 0

    get getProduct() {

        return this.product
    }

    get getHasMoreProduct() {

        return this.hasMoreProduct
    }

    get getCategory() {

        return this.category
    }

    get getSubcategory() {

        return this.subcategory
    }

    get getOrder() {

        return this.order
    }

    get getTag() {

        return this.navStater.getTag
    }

    set setCategory(id: ProductCategoryId) {

        this.category = id
    }

    set setSubcategory(id: ProductSubcategoryId) {

        this.subcategory = id
    }

    set setOrder(id: ProductOrderId) {

        this.order = id
    }

    unsetProduct() {

        this.product = null
    }

    setProduct() {

        const offset = this.product?.length ?? DEFAULT_OFFSET

        this.getProductByFilterUseCase
            .execute({

                categoryId: this.category,
                limit: DEFAULT_LIMIT,
                offset: offset,
                order: this.order,
                subcategoryId: this.subcategory,
                tag: this.getTag ?? '',
                userId: this.appStater.getId
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

    set setTag(tag: string) {
        
        this.navStater.setTag = tag
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

                (isFavourite) => {

                    runInAction(

                        () => {

                            if( this.product ) this.product[index].isFavorites = isFavourite
                        }
                    )
                }
            )
    }
}