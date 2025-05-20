import { makeAutoObservable, runInAction } from "mobx";
import GetProductByCategoryUseCase from "../../../domain/usecase/GetProductByCategoryUseCase";
import { ProductSubcategoryId } from "../../../domain/model/product/ProductSubcategory";
import Product from "../../../domain/model/product/Product";
import ProductCategoryParam from "../../../domain/model/product/ProductCategoryParam";

export default class FoodiesViewModel {

    constructor(

        private getProductByCategoryUseCase: GetProductByCategoryUseCase,
    ) {

        makeAutoObservable(this)
    }

    private activeSubCategoryId: ProductSubcategoryId = 1
    
    get getActiveSubCategoryId() {

        return this.activeSubCategoryId
    }

    set setActiveSubCategoryId(id: ProductSubcategoryId) {

        this.activeSubCategoryId = id
    }

    private foodies: Product[] = []
    
    get getFoodies() {

        return this.foodies
    }

    set setFoodies(param: ProductCategoryParam) {

        this.getProductByCategoryUseCase
            .execute(param)
            .then(

                value => runInAction(() => this.foodies = value)
            )
    }
}