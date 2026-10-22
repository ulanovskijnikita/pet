import { makeAutoObservable, runInAction } from "mobx";
import RegisterUserUseCase from "../../../entites/user/usecase/RegisterUserUseCase";
import ValidateUserResult from "../../../entites/user/model/res/RegisterUserUseCaseRes";
import RegisterUserUseCaseParam from "../../../entites/user/model/param/RegisterUserUseCaseParam";

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