import {makeAutoObservable, runInAction} from "mobx";
import GetProductByCategoryUseCase from "../../../domain/usecase/GetProductByCategoryUseCase.ts";
import Product from "../../../domain/model/product/Product.ts";
import ProductCategoryParam from "../../../domain/model/product/ProductCategoryParam.ts";
import { ProductSubcategoryId } from "../../../domain/model/product/ProductSubcategory.ts";

export default class ClothingViewModel {

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

    private clothing: Product[] = []

    get getClothing() {

        return this.clothing
    }

    set setClothing(param: ProductCategoryParam) {

        this.getProductByCategoryUseCase
            .execute(param)
            .then(

                value => runInAction(() => this.clothing = value)
            )
    }
}