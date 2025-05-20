import { makeAutoObservable, runInAction } from "mobx";
import GetSecondUseCase from "../../../domain/usecase/GetSecondUseCase";
import AppViewModel from "../../AppViewModel";
import GetSecondUseCaseParam from "../../../domain/model/email/GetSecondUseCaseParam";
import GetSecondUseCaseRes from "../../../domain/model/email/GetSecondUseCaseRes";

export default class HomeViewModel {

    constructor(

        private getSecondUseCase: GetSecondUseCase,
        private appViewModel: AppViewModel,
    ) {

        makeAutoObservable(this)
    }

    private secondRes: GetSecondUseCaseRes| null = null

    get getSecondRes() {

        return this.secondRes
    }

    set setSecondRes(param: GetSecondUseCaseParam) {

        this.getSecondUseCase
            .execute(param)
            .then(

                (res) => {

                    runInAction(

                        () => {

                            this.secondRes = res

                            this.appViewModel.setUserStatus = res.status
                        }
                    )
                }
            )
            .then(

                () => {

                    setTimeout(
                        () => {

                            runInAction(

                                () => {

                                    this.secondRes = null
                                }
                            )
                        }, 1000
                    )
                }
            )
    }
}