import { ProductId, ProductQuantity } from "../../../product/model/Product";
import { CartId } from "../Cart";

export default interface AddToProgressCartUseCaseParam {

    cartId: CartId | null
    productId: ProductId
    quantity: ProductQuantity
}