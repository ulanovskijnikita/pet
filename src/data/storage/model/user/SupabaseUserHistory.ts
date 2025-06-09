import { Enums } from "../supabase/database.types"
import { SupabaseProductId, SupabaseProductTag } from "../product/SupabaseProduct"
import { SupabaseProductQuantity } from "./AddToUserCartParam"
import { SupabaseUserCartId } from "./SupabaseUserCartPreview"

export type SupabaseUserCartPrice = number

export type SupabaseCartProduct = {

    product_id: SupabaseProductId
    product_tag: SupabaseProductTag
    product_quantity: SupabaseProductQuantity
}

export default interface SupabaseUserHistory {

    cart_id: SupabaseUserCartId
    cart_status: Enums<"cart_status">
    cart_price: SupabaseUserCartPrice
    cart_products: SupabaseCartProduct[]
}