import { User, UserId } from "../../model/User";
import { UserRepository } from "../../repository/UserRepository";

export type GetUserDataByIdParam = {
    userId: UserId
}

export class GetUserDataByIdUseCase {

    constructor(private userRepository: UserRepository) {}

    execute(param: GetUserDataByIdParam): User {
        return this.userRepository.getById(param.userId)
    }
}