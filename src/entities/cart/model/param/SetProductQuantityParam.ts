import { ProductId } from "../../../../shared/model/entities/Product";
import { CartId, CartProductQuantity } from "../../../../shared/model/entities/Cart";

export default interface SetProductQuantityParam {

    cartId: CartId
    productId: ProductId
    quantity: CartProductQuantity
}