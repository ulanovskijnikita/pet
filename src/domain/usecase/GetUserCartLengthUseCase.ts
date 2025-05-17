import { UserId } from "../model/user/User";
import { UserRepository } from "../repository/UserRepository";

export default class GetUserCartLengthUseCase {

    constructor(

        private userRepository: UserRepository
    ) {}

    async execute(id: UserId) {

        return await this.userRepository.getCartLength(id)
    }
}