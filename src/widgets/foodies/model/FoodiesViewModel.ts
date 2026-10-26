import { makeAutoObservable, runInAction } from "mobx";
import { ProductSubcategoryId } from "../../../entities/product/model/ProductSubcategory";
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

export default class FoodiesViewModel {

    constructor(

        private appStater: AppStater,
        private navStater: NavStater,
        private getProductByCategoryUseCase: GetProductByCategoryUseCase,
        private addToUserCartUseCase: AddToProgressCartUseCase,
        private toggleUserFavouriteUseCase: ToggleFavouriteProductUseCase,
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

    setFoodies() {

        this.foodies = null

        this.getProductByCategoryUseCase
            .execute({

                categoryId: productCategory.foodies.id,
                limit: DEFAULT_LIMIT,
                offset: DEFAULT_OFFSET,
                subcategoryId: this.activeSubCategoryId,
                userId: this.appStater.getUserId
            })
            .then(

                value => runInAction(

                    () => this.foodies = value
                )
            )
    }

    set setActiveSubCategoryId(id: ProductSubcategoryId) {

        this.activeSubCategoryId = id
    }

    set addToUserCart(id: ProductId) {
    
        this.addToUserCartUseCase
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

        this.toggleUserFavouriteUseCase
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
}