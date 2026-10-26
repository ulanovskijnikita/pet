import { makeAutoObservable, runInAction } from "mobx";
import User from "../../../shared/model/entities/User";
import GetUserUseCase from "../../../entities/user/usecase/GetUserUseCase";
import SignOutUserUseCase from "../../../entities/user/usecase/SignOutUserUseCase";
import AppStater from "../../../app/model/AppStater";
import NavStater from "../../../widgets/nav/model/NavStater";

export default class ProfileViewModel {

    constructor(

        private getUserUseCase: GetUserUseCase,
        private signOutUserUseCase: SignOutUserUseCase,
        private appStater: AppStater,
        private navStater: NavStater,
    ) {

        makeAutoObservable(this)
    }

    private user: User | null = null

    get getUser() {

        return this.user
    }

    setUser() {

        const user = this.getUserUseCase.execute()

        this.user = user
    }

    signOut() {

        this.signOutUserUseCase.execute()

        runInAction(

            () => {

                this.user = null

                this.appStater.signOut()

                this.navStater.changeCartLength(0)
            }
        )
    }
}