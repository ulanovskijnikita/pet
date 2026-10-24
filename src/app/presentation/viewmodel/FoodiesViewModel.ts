import { makeAutoObservable, runInAction } from "mobx";
import GetProductByCategoryUseCase from "../../../domain/usecase/GetProductByCategoryUseCase";
import { ProductSubcategoryId } from "../../../entities/product/model/ProductSubcategory";
import Product, { ProductId } from "../../../shared/model/entities/Product";
import { FOODIES } from "../../../entities/product/model/ProductCategory";
import { DEFAULT_LIMIT } from "../constants/defaultLimit";
import { DEFAULT_OFFSET } from "../constants/defaultOffset";
import AppStater from "./appViewModel/AppStater";
import NavStater from "./navViewModel/NavStater";
import AddToProgressCartUseCase from "../../../entities/cart/usecase/SetProductQuantityUseCase";
import ToggleFavouriteProductUseCase from "../../../entities/user/usecase/ToggleFavouriteProductUseCase";
import { DEFAULT_QUANTITY } from "../constants/defaultQuantity";

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

                categoryId: FOODIES.id,
                limit: DEFAULT_LIMIT,
                offset: DEFAULT_OFFSET,
                subcategoryId: this.activeSubCategoryId,
                userId: this.appStater.getId
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

                (isFavourite) => {

                    runInAction(

                        () => {

                            if( this.foodies ) this.foodies[index].isFavorites = isFavourite
                        }
                    )
                }
            )
    }
}