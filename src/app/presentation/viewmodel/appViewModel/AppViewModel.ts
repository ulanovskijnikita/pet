import { makeAutoObservable } from "mobx";
import GetUserUseCase from "../../../../entities/user/usecase/GetUserUseCase";
import { UserId } from "../../../../shared/model/entities/User";
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