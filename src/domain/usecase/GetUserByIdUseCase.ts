import User, { UserId } from "../model/user/User";
import { UserRepository } from "../repository/UserRepository";

export default class GetUserByIdUseCase {

    constructor(

        private userRepository: UserRepository
    ) {}

    async execute(id: UserId): Promise<User> {

        const userCashe = this.userRepository.get()

        if (userCashe) return userCashe

        return await this.userRepository.getUserById(id)
    }
}