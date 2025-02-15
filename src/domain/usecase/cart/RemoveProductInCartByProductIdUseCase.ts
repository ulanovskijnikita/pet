import { ProductId } from "../../model/Product";
import { CartRepository } from "../../repository/CartRepository";

export type RemoveProductInCartByProductIdParam = {
    productId: ProductId
}

export class RemoveProductInCartByProductIdUseCase {

    constructor(private cartRepository: CartRepository) {}

    execute(param: RemoveProductInCartByProductIdParam): Boolean {
        return this.cartRepository.removeProductInCartByProductId(param.productId)
    }
}