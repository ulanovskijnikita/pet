import { IUser, UserId } from "../model/IUser";
import { UserRepository } from "../repository/UserRepository";

export type GetUserDataByIdParam = {
    userId: UserId
}

export class GetUserDataByIdUseCase {

    constructor(private userRepository: UserRepository) {}

    execute(param: GetUserDataByIdParam): IUser {
        return this.userRepository.getById(param.userId)
    }
}