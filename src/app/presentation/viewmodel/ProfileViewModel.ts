import { makeAutoObservable } from "mobx";
import User from "../../../shared/model/entities/User";
import GetUserUseCase from "../../../entities/user/usecase/GetUserUseCase";

export default class ProfileViewModel {

    constructor(

        private getUserUseCase: GetUserUseCase,
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
}