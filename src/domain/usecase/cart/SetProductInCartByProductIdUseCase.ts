import { ProductId } from "../../model/Product";
import { CartRepository } from "../../repository/CartRepository";

export type SetProductInCartByProductIdParam = {
    productId: ProductId
}

export class SetProductInCartByProductIdUseCase {

    constructor(private cartRepository: CartRepository) {}

    execute(param: SetProductInCartByProductIdParam): Boolean {
        return this.cartRepository.setProductInCartByProductId(param.productId)
    }
}