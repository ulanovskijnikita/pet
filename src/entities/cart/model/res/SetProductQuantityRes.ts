import { CartLength, CartPrice, CartProductQuantity } from "../../../../shared/model/entities/Cart"
import Product from "../../../../shared/model/entities/Product"

type SetProductQuantityRes = {

    product: Product
    length: CartLength
    currentQuantity: CartProductQuantity
    price: CartPrice
}

export default SetProductQuantityRes