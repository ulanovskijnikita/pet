import { makeAutoObservable, runInAction } from "mobx";
import UserIdParam from "../../../domain/model/user/UserIdParam";
import SignInUserUseCase from "../../../domain/usecase/SignInUserUseCase";
import UserSignInResult from "../../../domain/model/user/UserSignInResult";
import AppStater from "./appViewModel/AppStater";

export default class SignInViewModel {

    constructor(

        private appStater: AppStater,
        private signInUserUseCase: SignInUserUseCase,
    ) {

        makeAutoObservable(this)
    }

    private result: UserSignInResult | null = null

    private loaded: boolean = false

    get getLoaded() {

        return this.loaded
    }

    get getResult() {

        return this.result
    }

    set setResult(param: UserIdParam) {

        this.loaded = true

        this.signInUserUseCase
            .execute(param)
            .then(

                res =>
                    runInAction(

                        () => {

                            this.loaded = false
                            
                            this.appStater.setId()
                            
                            this.result = res
                        }
                    )
            )
            .then(() => {

                runInAction(() => {

                    setTimeout(() => {

                        this.result = null
                    }, 2000)
                })
            })           
    }
}