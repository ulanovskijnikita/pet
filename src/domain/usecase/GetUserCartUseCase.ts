import { UserId } from "../model/user/User";
import UserRepository from "../repository/UserRepository";

export default class GetUserCartUseCase {

    constructor(

        private userRepository: UserRepository
    ) {}

    async execute(id: UserId | null) {

        return this.userRepository.getCart(id)
    }
}