import { Cart } from "../../model/Cart"
import { UserId } from "../../model/user/User.ts"
import { CartRepository } from '../../repository/CartRepository.ts';

export type GetCartByUserIdParam = {
    userId: UserId
}

export class GetCartByUserIdUseCase {

    constructor (private cartRepository: CartRepository) {}

    execute(param: GetCartByUserIdParam): Cart {
        return this.cartRepository.getByUserId(param.userId)
    }
}