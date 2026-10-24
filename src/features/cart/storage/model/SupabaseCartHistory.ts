import { SupabaseProductId, SupabaseProductTag } from "../../../product/storage/model/SupabaseProduct";
import { SupabaseCartId, SupabaseCartPrice, SupabaseCartProductQuantity, SupabaseCartStatus } from "./SupabaseCart";

type SupabaseCartHistory = {

    cart_id: SupabaseCartId
    cart_status: SupabaseCartStatus
    cart_price: SupabaseCartPrice
    cart_products: {

        id: SupabaseProductId
        tag: SupabaseProductTag
        q: SupabaseCartProductQuantity
    }
}[]

export default SupabaseCartHistory