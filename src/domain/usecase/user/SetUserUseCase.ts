import { User } from "../../model/user/User.ts";
import { UserRepository } from "../../repository/UserRepository";

export type SetUserParam = {
    user: User
}

export class SetUserUseCase {
    constructor (private userRepository: UserRepository) {}

    execute(param: SetUserParam): boolean {
        return this.userRepository.set(param.user)
    }
}