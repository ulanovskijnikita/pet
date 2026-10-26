import { makeAutoObservable, runInAction } from "mobx"
import { ProductCategoryId } from "../../../entities/product/model/ProductCategory"
import { ProductSubcategoryId } from "../../../entities/product/model/ProductSubcategory"
import Product, { ProductId } from "../../../shared/model/entities/Product"
import { DEFAULT_OFFSET } from "../../../shared/config/defaultOffset"
import NavStater from "../../nav/model/NavStater"
import { DEFAULT_LIMIT } from "../../../shared/config/defaultLimit"
import AppStater from "../../../app/model/AppStater"
import AddToProgressCartUseCase from "../../../entities/cart/usecase/SetProductQuantityUseCase"
import ToggleFavouriteProductUseCase from "../../../entities/user/usecase/ToggleFavouriteProductUseCase"
import GetProductByFilterUseCase from "../../../entities/product/usecase/GetProductByFilterUseCase"
import shoppingOrderArr from "../const/shoppingOrderArr"
import DEFAULT_PRODUCT_QUANTITY from "../../../entities/product/const/defaultProductQuantity"

export default class ShoppingViewModel {

    constructor(

        private navStater: NavStater,
        private appStater: AppStater,
        private getProductByFilterUseCase: GetProductByFilterUseCase,
        private addToProgressCartUseCase: AddToProgressCartUseCase,
        private toggleFavouriteProductUseCase: ToggleFavouriteProductUseCase,
    ) {

        makeAutoObservable(this)
    }

    private product: Product[] | null = null

    private hasMoreProduct = true

    private category: ProductCategoryId = 1

    private subcategory: ProductSubcategoryId = 1

    private orderIndex: number = 0

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

        return this.orderIndex
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

    set setOrder(index: number) {

        this.orderIndex = index
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
                order: shoppingOrderArr[ this.orderIndex ].action,
                subcategoryId: this.subcategory,
                tag: this.getTag ?? '',
                userId: this.appStater.getUserId
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
    
        this.addToProgressCartUseCase
            .execute({

                productId: id,
                quantity: DEFAULT_PRODUCT_QUANTITY,
                cartId: this.appStater.getCart!.id
            })
            .then(

                (res) => {

                    runInAction(

                        () => {

                            this.navStater.changeCartLength( res.length )

                            this.appStater.setProductQuantity(res.product, res.currentQuantity, res.price)
                        }
                    )
                }
            )
    }

    toggleFavourite(id: ProductId, index: number) {

        this.toggleFavouriteProductUseCase
            .execute({

                productId: id,
                userId: this.appStater.getUserId
            })
            .then(

                (isFavourite) => {

                    runInAction(

                        () => {

                            if( this.product ) this.product[index].isFavorites = isFavourite

                            this.appStater.setFavoutiteCartProduct(id, isFavourite)
                        }
                    )
                }
            )
    }
}