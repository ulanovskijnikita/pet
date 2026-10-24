import { ProductQuantity } from "../../../../../entities/product/model/Product"
import { CartLength } from "../../../../../entities/cart/model/CartPreview"

export default interface QuantitySupabaseProductRes {

    quantity: ProductQuantity
    length: CartLength
}
