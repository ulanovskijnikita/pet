import { makeAutoObservable, runInAction } from "mobx";
import AppStater from "../../../app/model/AppStater";
import CartHistory from "../../../entities/cart/model/CartHistory";
import GetCartHistoryUseCase from "../../../entities/cart/usecase/GetCartHistoryUseCase";

export default class HistorizingViewModel {

    constructor(

        private appStater: AppStater,
        private getCartHistoryUseCase: GetCartHistoryUseCase,
    ) {

        makeAutoObservable(this)
    }

    private history: CartHistory | null = null

    get getHistory() {

        return this.history
    }

    setHistory() {

        this.history = null

        this.getCartHistoryUseCase
            .execute( this.appStater.getUserId! )
            .then(

                (history) => {

                    runInAction(

                        () => {

                            this.history = history
                        }
                    )
                }
            )
    }
}