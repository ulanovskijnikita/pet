import { UserId } from "../../../shared/model/entities/User";
import CartRepository from "../repository/CartRepository";

export default class GetProgressCartUseCase {

    constructor(

        private cartRepository: CartRepository
    ) {}

    async execute(id: UserId) {

        return this.cartRepository.getProgressCart( id )
    }
}