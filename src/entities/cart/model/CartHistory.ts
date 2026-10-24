import { ProductId, ProductTag } from "../../product/model/Product";
import { CartId, CartPrice, CartProductQuantity, CartStatus } from "./Cart";

type CartHistory = {

    id: CartId
    status: CartStatus
    price: CartPrice
    products: {

        id: ProductId
        tag: ProductTag
        q: CartProductQuantity
    }
}[]

export default CartHistory