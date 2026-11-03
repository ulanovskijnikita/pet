import { makeAutoObservable, runInAction } from "mobx";
import { ProductSubcategoryId, ProductSubcategoryValue } from "../../../entities/product/model/ProductSubcategory";
import Product, { ProductId } from "../../../shared/model/entities/Product";
import { DEFAULT_LIMIT } from "../../../shared/config/defaultLimit";
import { DEFAULT_OFFSET } from "../../../shared/config/defaultOffset";
import AppStater from "../../../app/model/AppStater";
import NavStater from "../../nav/model/NavStater";
import AddToProgressCartUseCase from "../../../entities/cart/usecase/SetProductQuantityUseCase";
import ToggleFavouriteProductUseCase from "../../../entities/user/usecase/ToggleFavouriteProductUseCase";
import GetProductByCategoryUseCase from "../../../entities/product/usecase/GetProductByCategoryUseCase";
import productCategory from "../../../entities/product/const/productCategory";
import DEFAULT_PRODUCT_QUANTITY from "../../../entities/product/const/defaultProductQuantity";
import productSubCategory from "../../../entities/product/const/productSubCategory";
import ShoppingStater from "../../shopping/model/ShoppingStater";
import FoodiesStater from "./FoodiesStater";

export default class FoodiesViewModel implements FoodiesStater {

    constructor(

        private appStater: AppStater,
        private navStater: NavStater,
        private getProductByCategoryUseCase: GetProductByCategoryUseCase,
        private addToProgressCartUseCase: AddToProgressCartUseCase,
        private toggleFavouriteProductUseCase: ToggleFavouriteProductUseCase,
        private shoppingStater: ShoppingStater,
    ) {

        makeAutoObservable(this)
    }

    private foodies: Product[] | null = null

    private activeSubCategoryId: ProductSubcategoryId = 1
    
    get getFoodies() {

        return this.foodies
    }

    get getActiveSubCategoryId() {

        return this.activeSubCategoryId
    }

    get getTag() {

        return this.navStater.getTag
    }

    setFoodies(id: ProductSubcategoryId) {

        this.foodies = null

        this.getProductByCategoryUseCase
            .execute({

                categoryId: productCategory.foodies.id,
                limit: DEFAULT_LIMIT,
                offset: DEFAULT_OFFSET,
                subcategoryId: id,
                userId: this.appStater.getUserId
            })
            .then(

                value => runInAction(

                    () => this.foodies = value
                )
            )
    }

    setActiveSubCategoryId(name: ProductSubcategoryValue) {

        for (const subcategoryObj of productSubCategory[ productCategory.foodies.id ]) {

            if (subcategoryObj.value == name) {

                runInAction(() => {

                    this.setFoodies( subcategoryObj.id )

                    this.activeSubCategoryId = subcategoryObj.id
                })

                break
            }
        }

        return this.activeSubCategoryId
    }

    set addToUserCart(id: ProductId) {
    
        this.addToProgressCartUseCase
            .execute({

                productId: id,
                quantity: DEFAULT_PRODUCT_QUANTITY,
                cartId: this.appStater.getCart!.id
            })
            .then(

                res => {

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

                            if( this.foodies ) this.foodies[index].isFavorites = isFavourite

                            this.appStater.setFavoutiteCartProduct(id, isFavourite)
                        }
                    )
                }
            )
    }
    
    get getCategory() {

        return this.shoppingStater.getCategory
    }

    get getSubCategory() {

        return this.shoppingStater.getSubCategory
    }

    unsetFoodies() {

        this.foodies = null
    }
}