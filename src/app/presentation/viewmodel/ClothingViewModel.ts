import {makeAutoObservable, runInAction} from "mobx";
import GetProductByCategoryUseCase from "../../../domain/usecase/GetProductByCategoryUseCase.ts";
import Product, { ProductId } from "../../../domain/model/product/Product.ts";
import { ProductSubcategoryId } from "../../../domain/model/product/ProductSubcategory.ts";
import AppStater from "./appViewModel/AppStater.ts";
import { CLOTHING } from "../../../domain/model/product/ProductCategory.ts";
import { DEFAULT_LIMIT_OVERVIEW } from "../constants/defaultLimit.ts";
import { DEFAULT_OFFSET } from "../constants/defaultOffset.ts";
import NavStater from "./navViewModel/NavStater.ts";
import AddToUserCartUseCase from "../../../domain/usecase/AddToUserCartUseCase.ts";
import { DEFAULT_QUANTITY } from "../constants/defaultQuantity.ts";
import ToggleUserFavouriteUseCase from "../../../domain/usecase/ToggleUserFavouriteUseCase.ts";

export default class ClothingViewModel {

    constructor(

        private appStater: AppStater,
        private navStater: NavStater,
        private getProductByCategoryUseCase: GetProductByCategoryUseCase,
        private addToUserCartUseCase: AddToUserCartUseCase,
        private toggleUserFavouriteUseCase: ToggleUserFavouriteUseCase,
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

    setClothing() {

        this.clothing = null

        this.getProductByCategoryUseCase
            .execute({

                categoryId: CLOTHING.id,
                limit: DEFAULT_LIMIT_OVERVIEW,
                offset: DEFAULT_OFFSET,
                subcategoryId: this.activeSubCategoryId,
                userId: this.appStater.getId
            })
            .then(

                value => runInAction(() => this.clothing = value)
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

                            if( this.clothing ) this.clothing[index].isFavorites = isFavourite
                        }
                    )
                }
            )
    }
}