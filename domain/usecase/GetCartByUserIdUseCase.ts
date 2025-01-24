import { ICart } from "../model/ICart"
import { UserId } from "../model/IUser"
import { CartRepository } from '../repository/CartRepository';

export type GetCartByUserIdParam = {
    userId: UserId
}

export class GetCartByUserIdUseCase {

    constructor (private cartRepository: CartRepository) {}

    execute(param: GetCartByUserIdParam): ICart {
        return this.cartRepository.getByUserId(param.userId)
    }
}