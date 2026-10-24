import { ProductQuantity } from "../../../../../shared/model/entities/Product"
import { CartLength } from "../../../../../entities/cart/model/CartPreview"

export default interface QuantityStorageProductRes {

    quantity: ProductQuantity
    length: CartLength
}
