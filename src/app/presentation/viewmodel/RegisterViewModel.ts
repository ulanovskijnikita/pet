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

    get getResult() {

        return this.result
    }

    set setResult(param: RegisterUserUseCaseParam | null) {

        if (param) {

            this.registerUserUseCase
            .execute(param)
            .then(

                result =>
                    runInAction(

                        () => this.result = result
                    )
            )
        } else {

            this.result = param
        }
    }
}