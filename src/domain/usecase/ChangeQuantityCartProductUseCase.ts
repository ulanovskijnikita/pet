import AddToUserCartParam from "../model/user/AddToUserCartParam";
import { UserRepository } from "../repository/UserRepository";

export default class ChangeQuantityCartProductUseCase {

    constructor(

        private userRepository: UserRepository
    ) {}

    async execute(param: AddToUserCartParam) {

        return this.userRepository.changeQuantityCartProduct(param)
    }
}