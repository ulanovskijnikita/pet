import { makeAutoObservable, runInAction } from "mobx";
import SecondStater from "./SecondStater";
import GetSecondUseCase from "../../../../domain/usecase/GetSecondUseCase";
import GetSecondUseCaseRes from "../../../../domain/model/email/GetSecondUseCaseRes";
import { UserMessage } from "../../../../domain/model/user/SendMessageParam";
import GetUserUseCase from "../../../../domain/usecase/GetUserUseCase";
import { UserId } from "../../../../domain/model/user/User";

export default class SecondViewModel implements SecondStater {

    constructor(

        private getSecondUseCase: GetSecondUseCase,
        private getUserUseCase: GetUserUseCase,
    ) {

        makeAutoObservable(this)
    }

    private secondRes: GetSecondUseCaseRes | null = null

    private id: UserId | null = null

    get getSecondRes() {
    
        return this.secondRes
    }

    get getId() {

        return this.id
    }

    set setSecondRes(message: UserMessage) {

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
                        }, 1000
                    )
                }
            )
    }

    set setId(id: UserId | null) {

        this.id = id
    }
}