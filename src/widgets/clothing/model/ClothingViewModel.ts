import {makeAutoObservable, runInAction} from "mobx";
import Product, { ProductId } from "../../../shared/model/entities/Product.ts";
import { ProductSubcategoryId, ProductSubcategoryValue } from "../../../entities/product/model/ProductSubcategory.ts";
import AppStater from "../../../app/model/AppStater.ts";
import { DEFAULT_LIMIT_OVERVIEW } from "../../../shared/config/defaultLimit.ts";
import { DEFAULT_OFFSET } from "../../../shared/config/defaultOffset.ts";
import NavStater from "../../nav/model/NavStater.ts";
import AddToProgressCartUseCase from "../../../entities/cart/usecase/SetProductQuantityUseCase.ts";
import ToggleFavouriteProductUseCase from "../../../entities/user/usecase/ToggleFavouriteProductUseCase.ts";
import GetProductByCategoryUseCase from "../../../entities/product/usecase/GetProductByCategoryUseCase.ts";
import productCategory from "../../../entities/product/const/productCategory.ts";
import DEFAULT_PRODUCT_QUANTITY from "../../../entities/product/const/defaultProductQuantity.ts";
import productSubCategory from "../../../entities/product/const/productSubCategory.ts";
import ShoppingStater from "../../shopping/model/ShoppingStater.ts";
import ClothingStater from "./ClothingStater.ts";

export default class ClothingViewModel implements ClothingStater {

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

    private activeSubCategoryId: ProductSubcategoryId = 1

    private clothing: Product[] | null = null

    get getActiveSubCategoryId() {

        return this.activeSubCategoryId
    }    

    get getClothing() {

        return this.clothing
    }

    get getTag() {

        return this.navStater.getTag
    }

    setClothing(id: ProductSubcategoryId) {

        this.getProductByCategoryUseCase
            .execute({

                categoryId: productCategory.clothing.id,
                limit: DEFAULT_LIMIT_OVERVIEW,
                offset: DEFAULT_OFFSET,
                subcategoryId: id,
                userId: this.appStater.getUserId
            })
            .then(

                value => runInAction(() => this.clothing = value)
            )
    }
    
    setActiveSubCategoryId(name: ProductSubcategoryValue) {

        this.clothing = null

        for (const subcategoryObj of productSubCategory[ productCategory.clothing.id ]) {

            if (subcategoryObj.value == name) {

                runInAction(() => {

                    this.setClothing( subcategoryObj.id )

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

                            if( this.clothing ) this.clothing[index].isFavorites = isFavourite

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

    unsetClothing() {

        this.clothing = null
    }
}