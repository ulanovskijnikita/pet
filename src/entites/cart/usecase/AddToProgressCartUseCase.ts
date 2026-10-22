import AddToProgressCartUseCaseParam from "../model/param/AddToProgressCartUseCaseParam";
import CartRepository from "../repository/CartRepository";

export default class AddToProgressCartUseCase {

    constructor(

        private cartRepository: CartRepository
    ) {}

    async execute(param: AddToProgressCartUseCaseParam) {

        return await this.cartRepository.addToCart( param )
    }
}