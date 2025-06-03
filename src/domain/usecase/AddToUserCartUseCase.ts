import AddToUserCartParam from "../model/user/AddToUserCartParam";
import UserRepository from "../repository/UserRepository";

export default class AddToUserCartUseCase {

    constructor(

        private userRepository: UserRepository
    ) {}

    async execute(param: AddToUserCartParam) {

        return await this.userRepository.addToCart(param)
    }
}