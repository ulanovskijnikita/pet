import { makeAutoObservable, runInAction } from "mobx";
import SignInUserUseCaseParam from "../../../entites/user/model/param/SignInUserUseCaseParam";
import SignInUserUseCase from "../../../entites/user/usecase/SignInUserUseCase";
import UserSignInRes from "../../../entites/user/model/res/UserSignInRes";
import AppStater from "./appViewModel/AppStater";

export default class SignInViewModel {

    constructor(

        private appStater: AppStater,
        private signInUserUseCase: SignInUserUseCase,
    ) {

        makeAutoObservable(this)
    }

    private result: UserSignInRes | null = null

    private loaded: boolean = false

    get getLoaded() {

        return this.loaded
    }

    get getResult() {

        return this.result
    }

    set setResult(param: SignInUserUseCaseParam) {

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