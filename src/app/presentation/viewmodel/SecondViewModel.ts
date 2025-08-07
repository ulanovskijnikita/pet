import { makeAutoObservable, runInAction } from "mobx";
import GetSecondUseCase from "../../../domain/usecase/GetSecondUseCase";
import GetSecondUseCaseRes from "../../../domain/model/email/GetSecondUseCaseRes";
import { UserMessage } from "../../../domain/model/user/SendMessageParam";
import GetUserUseCase from "../../../domain/usecase/GetUserUseCase";
import AppStater from "./appViewModel/AppStater";

export default class SecondViewModel {

    constructor(

        private getSecondUseCase: GetSecondUseCase,
        private getUserUseCase: GetUserUseCase,
        private appStater: AppStater,
    ) {

        makeAutoObservable(this)
    }

    private secondRes: GetSecondUseCaseRes | null = null

    private loaded: boolean = false

    get getLoaded() {

        return this.loaded
    }

    get getSecondRes() {
    
        return this.secondRes
    }

    set setSecondRes(message: UserMessage) {

        this.loaded = true

        const user = this.getUserUseCase.execute()

        if (user) this.getSecondUseCase
            .execute({

                address: user.email,
                id: user.id,
                message: message,
                name: user.name,
                status: user.status
            })
            .then(

                (res) => {

                    runInAction(

                        () => {

                            this.loaded = false

                            this.secondRes = res
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
                        }, 2000
                    )
                }
            )
    }

    get getId() {

        return this.appStater.getId
    }
}