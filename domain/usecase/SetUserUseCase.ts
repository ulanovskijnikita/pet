import { IUser } from "../model/IUser";
import { UserRepository } from "../repository/UserRepository";

export type SetUserParam = {
    user: IUser
}

export class SetUserUseCase {
    constructor (private userRepository: UserRepository) {}

    execute(param: SetUserParam): boolean {
        return this.userRepository.set(param.user)
    }
}