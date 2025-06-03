import { makeAutoObservable, runInAction } from "mobx";
import GetUserHistoryListUseCase from "../../../domain/usecase/GetUserHistoryListUseCase";
import UserHistory from "../../../domain/model/user/UserHistory";
import { UserId } from "../../../domain/model/user/User";

export default class HistoryViewModel {

    constructor(

        private getUserHistoryListUseCase: GetUserHistoryListUseCase
    ) {

        makeAutoObservable(this)
    }

    private userHistoryList: UserHistory[] = []

    get getUserHistoryList() {

        return this.userHistoryList
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