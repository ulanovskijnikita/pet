import { makeAutoObservable, runInAction } from "mobx";
import GetUserHistoryListUseCase from "../../../entites/cart/usecase/GetUserHistoryListUseCase";
import CartsHistory from "../../../entites/cart/model/CartsHistory";
import AppStater from "./appViewModel/AppStater";

export default class HistorizingViewModel {

    constructor(

        private appStater: AppStater,
        private getUserHistoryListUseCase: GetUserHistoryListUseCase,
    ) {

        makeAutoObservable(this)
    }

    private history: CartsHistory[] | null = null

    get getHistory() {

        return this.history
    }

    setHistory() {

        this.history = null

        this.getUserHistoryListUseCase
            .execute( this.appStater.getId )
            .then(

                (userHistoryList) => {

                    runInAction(

                        () => {

                            this.history = userHistoryList
                        }
                    )
                }
            )
    }
}