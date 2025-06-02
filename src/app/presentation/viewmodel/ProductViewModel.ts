import { makeAutoObservable, runInAction } from "mobx";
import GetProductByIdUseCase from "../../../domain/usecase/GetProductByIdUseCase";
import ProductDetails from "../../../domain/model/product/ProductDetails";
import GetProductByIdParam from "../../../domain/model/product/GetProductByIdParam";
import { DEFAULT_QUANTITY, ProductQuantity } from "../../../domain/model/user/AddToUserCartParam";
import SetQuantityCartProductParam from "../../../data/storage/model/user/SetQuantityCartProductParam";

export default class ProductViewModel {

    constructor(

        private getProductByIdUseCase: GetProductByIdUseCase
    ) {

        makeAutoObservable(this)
    }

    private productDetails: ProductDetails | null = null

    private productQuantity: ProductQuantity = DEFAULT_QUANTITY

    get getProductQuantity() {

        return this.productQuantity
    }

    get getProductDetails() {

        return this.productDetails
    }

    set setProductQuantity(param: SetQuantityCartProductParam) {

        this.productQuantity += param.quantity
    }

    set changeProductQuantity(param: SetQuantityCartProductParam) {

        if ( param.quantity > 0 ) this.productQuantity = param.quantity
    }

    set setProductDetails(param: GetProductByIdParam | null) {

        if (param) {

            this.getProductByIdUseCase
                .execute(param)
                .then(

                    (productDetails) => {

                        runInAction(

                            () => {

                                this.productDetails = productDetails
                            }
                        )
                    }
                )
        } else {

            this.productDetails = null
        }        
    }
}