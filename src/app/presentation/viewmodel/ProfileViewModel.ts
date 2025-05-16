import { makeAutoObservable, runInAction } from "mobx";
import GetUserByIdUseCase from "../../../domain/usecase/GetUserByIdUseCase";
import User, { UserId } from "../../../domain/model/user/User";
import AppViewModel from "../../AppViewModel";

export default class ProfileViewModel {

    constructor(

        private getUserByIdUseCase: GetUserByIdUseCase,
        private appViemModel: AppViewModel,
    ) {

        makeAutoObservable(this)
    }

    private user: User | null = null

    get getUser() {

        return this.user
    }

    async setUser(id: UserId) {

        await this.getUserByIdUseCase
            .execute(id)
            .then(

                (user) => 
                    runInAction(

                        () =>
                            this.user = user
                    )
            )
        
        this.appViemModel.setUser()
    }
}