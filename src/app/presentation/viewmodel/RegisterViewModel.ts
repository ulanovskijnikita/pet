import { makeAutoObservable, runInAction } from "mobx";
import RegisterUserUseCase from "../../../domain/usecase/RegisterUserUseCase";
import ValidateUserResult from "../../../domain/model/user/RegisterUserUseCaseResult";
import RegisterUserUseCaseParam from "../../../domain/model/user/RegisterUserUseCaseParam";

export default class RegisterViewModel {

    constructor(

        private registerUserUseCase: RegisterUserUseCase
    ) {

        makeAutoObservable(this)
    }

    private result: ValidateUserResult | null = null

    private loaded: boolean = false

    get getResult() {

        return this.result
    }

    get getLoaded() {

        return this.loaded
    }

    set setResult(param: RegisterUserUseCaseParam) {

        runInAction(() => {

            this.result = null
            
            this.loaded = true
        })

        this.registerUserUseCase
            .execute(param)
            .then(

                result =>
                    runInAction(

                        () => {

                            this.loaded = false

                            this.result = result
                        }
                    )
            ).then(() => {

                setTimeout(() => {

                    runInAction(() => {

                        this.result = null
                    })
                }, 2000)
            })
    }
}