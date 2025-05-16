import { ProductId } from "../../model/product/Product.ts";
import { CartRepository } from "../../repository/CartRepository.ts";

export type RemoveProductInCartByProductIdParam = {
    productId: ProductId
}

export class RemoveProductInCartByProductIdUseCase {

    constructor(private cartRepository: CartRepository) {}

    execute(param: RemoveProductInCartByProductIdParam): Boolean {
        return this.cartRepository.removeProductInCartByProductId(param.productId)
    }
}