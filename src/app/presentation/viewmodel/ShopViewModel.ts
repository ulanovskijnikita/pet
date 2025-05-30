import { makeAutoObservable, runInAction } from "mobx"
import { ProductCategoryId } from "../../../domain/model/product/ProductCategory"
import { ProductSubcategoryId } from "../../../domain/model/product/ProductSubcategory"
import GetProductByFilterUseCase from "../../../domain/usecase/GetProductByFilterUseCase"
import { ProductOrderId } from "../../../domain/model/product/ProductOrder"
import Product from "../../../domain/model/product/Product"
import GetProductByFilterParam from "../../../domain/model/product/GetProductByFilterParam"
import { DEFAULT_OFFSET } from "../constants/defaultOffset"

export default class ShopViewModel {

    constructor(

        private getProductByFilterUseCase: GetProductByFilterUseCase,
    ) {

        makeAutoObservable(this)
    }

    private product: Product[] | null = null

    private getProductByFilterParam: GetProductByFilterParam | null = null

    private hasMoreProduct = true

    private category: ProductCategoryId = 1

    private subcategory: ProductSubcategoryId = 1

    private order: ProductOrderId = 0

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

        return this.order
    }

    set setCategory(id: ProductCategoryId) {

        this.category = id
    }

    set setSubcategory(id: ProductSubcategoryId) {

        this.subcategory = id
    }

    set setOrder(id: ProductOrderId) {

        this.order = id
    }

    set setProduct(param: GetProductByFilterParam) {

        this.getProductByFilterUseCase
            .execute(param)
            .then(

                (product) => {

                    runInAction(

                        () => {

                            this.getProductByFilterParam = param

                            this.hasMoreProduct = product.length < param.limit ? false : true

                            if (param.offset != DEFAULT_OFFSET && this.product) {

                                this.product = [...this.product, ...product]

                                return
                            }

                            this.product = product
                        }
                    )
                }
            )
    }
}