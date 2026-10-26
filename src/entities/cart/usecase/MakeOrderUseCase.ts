import Cart from "../../../shared/model/entities/Cart";
import { UserId } from "../../../shared/model/entities/User";
import CartRepository from "../repository/CartRepository";

export default class MakeOrderUseCase {

    constructor(

        private cartRepository: CartRepository
    ) {}

    async execute(id: UserId, cart: Cart) {

        return this.cartRepository.makeOrder(id, cart)
    }
}