import { makeAutoObservable, runInAction } from "mobx";
import UserIdParam from "../../../domain/model/user/UserIdParam";
import SignInUserUseCase from "../../../domain/usecase/SignInUserUseCase";
import UserSignInResult from "../../../domain/model/user/UserSignInResult";

export default class SignInViewModel {

    constructor(

        private signInUserUseCase: SignInUserUseCase
    ) {

        makeAutoObservable(this)
    }

    private result: UserSignInResult | null = null

    get getResult() {

        return this.result
    }

    set setResult(param: UserIdParam | null) {

        if (param) {

            this.signInUserUseCase
                .execute(param)
                .then(

                    res =>
                        runInAction(

                            () => {
                                
                                this.result = res
                            }
                        )
                ) 
        } else {
            
            this.result = param
        }            
    }
}