import { makeAutoObservable } from "mobx";
import GetUserUseCase from "../../../../entites/user/usecase/GetUserUseCase";
import { UserId } from "../../../../entites/user/model/User";
import AppStater from "./AppStater";

export default class AppViewModel implements AppStater {

    constructor(

        private getUserUseCase: GetUserUseCase,
    ) {

        makeAutoObservable(this)
    }

    private id: UserId | null = null

    get getId() {

        return this.id
    }

    setId() {
    
        const user = this.getUserUseCase.execute()

        if (user) {

            this.id = user.id
        } else {

            this.id = null
        }
    }
}