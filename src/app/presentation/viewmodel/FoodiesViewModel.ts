import { makeAutoObservable, runInAction } from "mobx";
import GetProductByCategoryUseCase from "../../../domain/usecase/GetProductByCategoryUseCase";
import { ProductSubcategoryId } from "../../../domain/model/product/ProductSubcategory";
import Product, { ProductId } from "../../../domain/model/product/Product";
import { FOODIES } from "../../../domain/model/product/ProductCategory";
import { DEFAULT_LIMIT } from "../constants/defaultLimit";
import { DEFAULT_OFFSET } from "../constants/defaultOffset";
import AppStater from "./appViewModel/AppStater";
import NavStater from "./navViewModel/NavStater";
import AddToUserCartUseCase from "../../../domain/usecase/AddToUserCartUseCase";
import ToggleUserFavouriteUseCase from "../../../domain/usecase/ToggleUserFavouriteUseCase";
import { DEFAULT_QUANTITY } from "../constants/defaultQuantity";

export default class FoodiesViewModel {

    constructor(

        private appStater: AppStater,
        private navStater: NavStater,
        private getProductByCategoryUseCase: GetProductByCategoryUseCase,
        private addToUserCartUseCase: AddToUserCartUseCase,
        private toggleUserFavouriteUseCase: ToggleUserFavouriteUseCase,
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

                            if( this.foodies ) this.foodies[index].isFavorites = isFavourite
                        }
                    )
                }
            )
    }
}