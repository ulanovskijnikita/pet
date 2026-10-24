import { ProductId } from "../../../product/model/Product";
import { CartId, CartProductQuantity } from "../Cart";

export default interface SetProductQuantityParam {

    cartId: CartId
    productId: ProductId
    quantity: CartProductQuantity
}