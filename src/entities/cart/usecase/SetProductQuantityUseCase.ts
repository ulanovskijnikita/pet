import SetProductQuantityParam from "../model/param/SetProductQuantityParam";
import CartRepository from "../repository/CartRepository";

export default class SetProductQuantityUseCase {

    constructor(

        private cartRepository: CartRepository
    ) {}

    async execute(param: SetProductQuantityParam) {

        return await this.cartRepository.setProductQuantity( param )
    }
}