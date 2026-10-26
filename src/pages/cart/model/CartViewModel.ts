import { makeAutoObservable, runInAction } from "mobx";
import SetQuantityCartProductParam from "../../../entities/user/model/param/SetQuantityCartProductParam";
import MakeOrderUseCase from "../../../entities/cart/usecase/MakeOrderUseCase";
import NavStater from "../../../widgets/nav/model/NavStater";
import ToggleFavouriteProductUseCase from "../../../entities/user/usecase/ToggleFavouriteProductUseCase";
import { ProductId } from "../../../shared/model/entities/Product";
import AppStater from "../../../app/model/AppStater";
import SetProductQuantityUseCase from "../../../entities/cart/usecase/SetProductQuantityUseCase";
import HistorizingStater from "../../../widgets/history/model/HistorizingStater";

export default class CartViewModel {

    constructor(

        private navStater: NavStater,
        private appStater: AppStater,
        private setProductQuantityUseCase: SetProductQuantityUseCase,
        private makeOrderUseCase: MakeOrderUseCase,
        private toggleFavouriteProductUseCase: ToggleFavouriteProductUseCase,
        private historizingStater: HistorizingStater,
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
            .execute(this.appStater.getUserId!, this.appStater.getCart!)
            .then(

                cart => {

                    const cartProductIds = cart.products.map(({ product }) => product.id)

                    runInAction(

                        () => {

                            this.historizingStater.addCart( this.appStater.getCart! )

                            this.navStater.changeCartLength( cart.cartLength )

                            this.appStater.setCart({ 

                                ...cart,
                                cartProductIds,
                            })
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

                            this.navStater.changeCartLength( quantityRes.length )

                            if (quantityRes.currentQuantity > 0) {

                                if ( this.appStater.getCart ) this.appStater.getCart.products[param.index].q = quantityRes.currentQuantity
                            } else {

                                if ( this.appStater.getCart ) this.appStater.getCart.products.splice(param.index, 1)
                            }
                        
                            this.appStater.setProductQuantity(quantityRes.product, quantityRes.currentQuantity, quantityRes.price)
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

                isFavourite => {

                    runInAction(
                        
                        () => {

                            if ( this.appStater.getCart ) this.appStater.getCart.products[index].product.isFavorites = isFavourite

                            this.appStater.setFavoutiteCartProduct(id, isFavourite)
                        }
                    )
                }
            )
    }
}