import { UserId } from "../../user/model/User";
import UserRepository from "../../user/repository/UserRepository";

export default class GetUserCartUseCase {

    constructor(

        private userRepository: UserRepository
    ) {}

    async execute(id: UserId | null) {

        return this.userRepository.getCart(id)
    }
}