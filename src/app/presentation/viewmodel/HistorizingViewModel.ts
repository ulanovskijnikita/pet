import { makeAutoObservable, runInAction } from "mobx";
import GetUserHistoryListUseCase from "../../../domain/usecase/GetUserHistoryListUseCase";
import UserHistory from "../../../domain/model/user/UserHistory";
import AppStater from "./appViewModel/AppStater";

export default class HistorizingViewModel {

    constructor(

        private appStater: AppStater,
        private getUserHistoryListUseCase: GetUserHistoryListUseCase,
    ) {

        makeAutoObservable(this)
    }

    private history: UserHistory[] | null = null

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