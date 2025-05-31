import { makeAutoObservable, runInAction } from "mobx";
import GetProductByFavouriteUseCase from "../../../domain/usecase/GetProductByFavouriteUseCase";
import Product from "../../../domain/model/product/Product";
import GetProductByFavouriteParam from "../../../domain/model/product/GetProductByFavouriteParam";
import { ToggleFavouriteProductParam } from "../../AppViewModel";
import ToggleUserFavouriteUseCase from "../../../domain/usecase/ToggleUserFavouriteUseCase";

export default class FavouriteViewModel {

    constructor(

        private getProductByFavouriteUseCase: GetProductByFavouriteUseCase,
        private toggleUserFavouriteUseCase: ToggleUserFavouriteUseCase,
    ) {

        makeAutoObservable(this)
    }

    private favouriteProduct: Product[] | null = null

    private hasMoreProduct = true

    get getHasMoreProduct() {

        return this.hasMoreProduct
    }

    get getFavouriteProduct() {

        return this.favouriteProduct
    }

    set setFavouriteProduct(param: GetProductByFavouriteParam) {

        this.getProductByFavouriteUseCase
            .execute(param)
            .then(

                (product) => {

                    runInAction(

                        () => {

                            this.hasMoreProduct = product.length < param.limit ? false : true

                            this.favouriteProduct = product
                        }
                    )
                }
            )
    }

    set toggleFavouriteProduct(param: ToggleFavouriteProductParam) {

        this.toggleUserFavouriteUseCase
            .execute(param)
            .then(

                isFavourite => {
                
                    runInAction(

                        () => {
                            
                            param.list[param.productIndex].isFavorites = isFavourite

                            param.list.splice(param.productIndex, 1)
                        }
                    )
                }
            )
    }
}