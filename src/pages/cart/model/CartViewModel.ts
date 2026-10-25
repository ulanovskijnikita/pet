import { makeAutoObservable, runInAction } from "mobx";
import SetQuantityCartProductParam from "../../../entities/user/model/param/SetQuantityCartProductParam";
import MakeOrderUseCase from "../../../entities/cart/usecase/MakeOrderUseCase";
import NavStater from "../../../widgets/nav/model/NavStater";
import ToggleFavouriteProductUseCase from "../../../entities/user/usecase/ToggleFavouriteProductUseCase";
import { ProductId } from "../../../shared/model/entities/Product";
import AppStater from "../../../app/model/AppStater";
import SetProductQuantityUseCase from "../../../entities/cart/usecase/SetProductQuantityUseCase";

export default class CartViewModel {

    constructor(

        private navStater: NavStater,
        private appStater: AppStater,
        private setProductQuantityUseCase: SetProductQuantityUseCase,
        private makeOrderUseCase: MakeOrderUseCase,
        private toggleFavouriteProductUseCase: ToggleFavouriteProductUseCase,
    ) {

        makeAutoObservable(this)
    }

    get getCart() {
    
        return this.appStater.getCart
    }

    get getUserId() {

        return this.appStater.getUserId
    }

    makeOrder() {

        this.makeOrderUseCase
            .execute(this.getUserId!)
            .then(

                cart => {

                    runInAction(

                        () => {

                            this.navStater.changeCartLength( cart.cartLength )
                        }
                    )
                }
            )
    }

    set setProductQuantity(param: SetQuantityCartProductParam) {

        this.setProductQuantityUseCase
            .execute(param)
            .then(

                quantityRes => {

                    runInAction(

                        () => {

                            this.navStater.changeCartLength( quantityRes )

                            if (quantityRes > 0) {

                                if ( this.appStater.getCart ) this.appStater.getCart.products[param.index].q = quantityRes
                            } else {

                                if ( this.appStater.getCart ) this.appStater.getCart.products.splice(param.index, 1)
                            }                            
                        }
                    )
                }
            )
    }

    toggleFavourite(id: ProductId, index: number) {
    
        this.toggleFavouriteProductUseCase
            .execute({

                productId: id,
                userId: this.getUserId
            })
            .then(

                bool => {

                    runInAction(
                        
                        () => {

                            if ( this.appStater.getCart ) this.appStater.getCart.products[index].product.isFavorites = bool
                        }
                    )
                }
            )
    }
}