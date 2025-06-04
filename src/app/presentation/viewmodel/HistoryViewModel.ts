import { makeAutoObservable, runInAction } from "mobx";
import GetUserHistoryListUseCase from "../../../domain/usecase/GetUserHistoryListUseCase";
import UserHistory from "../../../domain/model/user/UserHistory";
import { UserId } from "../../../domain/model/user/User";
import GetProductsByCartUseCase from "../../../domain/usecase/GetProductsByCartUseCase";
import GetProductsByCartRes from "../../../domain/model/product/GetProductsByCartRes";
import GetProductsByCartParam from "../../../domain/model/product/GetProductsByCartParam";
import SetProductRatingUseCase from "../../../domain/usecase/SetProductRatingUseCase";
import { ProductId, ProductRating } from "../../../domain/model/product/Product";

export type SetProductRatingParam = {

    list: GetProductsByCartRes[]
    index: number
    userId: UserId
    productId: ProductId
    rating: ProductRating
}

export default class HistoryViewModel {

    constructor(

        private getUserHistoryListUseCase: GetUserHistoryListUseCase,
        private getProductsByCartUseCase: GetProductsByCartUseCase,
        private setProductRatingUseCase: SetProductRatingUseCase,
    ) {

        makeAutoObservable(this)
    }

    private userHistoryList: UserHistory[] = []

    private productsHistory: GetProductsByCartRes[] = []

    get getProductsHistory() {

        return this.productsHistory
    }

    get getUserHistoryList() {

        return this.userHistoryList
    }

    set setProductRating(param: SetProductRatingParam) {

        this.setProductRatingUseCase
            .execute(param)
            .then(

                (res) => {

                    runInAction(

                        () => {

                            param.list[param.index].userRating = res.userRating

                            param.list[param.index].rating = res.prodyctRating
                        }
                    )
                }
            )
    }

    set setProductsHistory(param: GetProductsByCartParam | null) {

        if(param) {

            this.getProductsByCartUseCase
                .execute(param)
                .then(

                    (res) => {

                        runInAction(

                            () => {

                                this.productsHistory = res
                            }
                        )
                    }
                )
        } else {

            this.productsHistory = []
        }
    }

    set setUserHistoryList(id: UserId) {

        this.getUserHistoryListUseCase
            .execute(id)
            .then(

                (userHistoryList) => {

                    runInAction(

                        () => {

                            this.userHistoryList = userHistoryList
                        }
                    )
                }
            )
    }
}