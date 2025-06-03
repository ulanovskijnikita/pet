import AddToUserCartParam from "../model/user/AddToUserCartParam";
import UserRepository from "../repository/UserRepository";

export default class SetQuantityCartProductUseCase {

    constructor(

        private userRepository: UserRepository
    ) {}

    async execute(param: AddToUserCartParam) {

        return this.userRepository.setQuantityCartProduct(param)
    }
}