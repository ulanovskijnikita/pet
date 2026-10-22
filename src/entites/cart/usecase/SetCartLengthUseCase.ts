import { CartId } from "../model/Cart";
import CartRepository from "../repository/CartRepository";

export default class SetCartLengthUseCase {

    constructor(

        private cartRepository: CartRepository,
    ) {}

    async execute(id: CartId) {

        return this.cartRepository.setCartLength( id )
    }
}