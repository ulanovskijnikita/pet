import { ProductId, ProductTag } from "../../../shared/model/entities/Product";
import { CartId, CartPrice, CartProductQuantity, CartStatus } from "../../../shared/model/entities/Cart";

type CartHistory = {

    id: CartId
    status: CartStatus
    price: CartPrice
    products: {

        product: {

            id: ProductId
            tag: ProductTag
        }
        q: CartProductQuantity
    }[]
}[]

export default CartHistory