import { SupabaseProductId } from "../../../../product/storage/model/SupabaseProduct"
import { SupabaseCartId, SupabaseCartProductQuantity } from "../SupabaseCart"

export default interface SetSupabaseProductQuantityParam {

    cartId: SupabaseCartId
    productId: SupabaseProductId
    quantity: SupabaseCartProductQuantity
}