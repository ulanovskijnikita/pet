import { CartLength, CartProductQuantity } from "../../../../../shared/model/entities/Cart"

export default interface QuantityStorageProductRes {

    quantity: CartProductQuantity
    length: CartLength
}
