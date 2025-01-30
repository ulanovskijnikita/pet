import { Cart } from "../../model/Cart"
import { UserId } from "../../model/User"
import { CartRepository } from '../../repository/CartRepository';

export type GetCartByUserIdParam = {
    userId: UserId
}

export class GetCartByUserIdUseCase {

    constructor (private cartRepository: CartRepository) {}

    execute(param: GetCartByUserIdParam): Cart {
        return this.cartRepository.getByUserId(param.userId)
    }
}