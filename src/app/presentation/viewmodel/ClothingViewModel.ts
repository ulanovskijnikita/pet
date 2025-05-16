import {makeAutoObservable, runInAction} from "mobx";
import GetProductByCategoryUseCase from "../../../domain/usecase/GetProductByCategoryUseCase.ts";
import Product from "../../../domain/model/product/Product.ts";
import ProductCategoryParam from "../../../domain/model/product/ProductCategoryParam.ts";
import { ProductCategoryId } from "../../../domain/model/product/ProductCategory.ts";

export default class ClothingViewModel {

    constructor(

        private getProductByCategoryUseCase: GetProductByCategoryUseCase,
    ) {
        
        makeAutoObservable(this)
    }

    private activeSubCategoryId: ProductCategoryId = 1

    get getActiveSubCategoryId() {

        return this.activeSubCategoryId
    }

    set setActiveSubCategoryId(id: ProductCategoryId) {

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