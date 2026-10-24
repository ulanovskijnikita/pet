import { Enums } from "../../../../shared/model/database.types"
import SupabaseProduct from "../../../product/storage/model/SupabaseProduct"

export type SupabaseCartId = number
export type SupabaseCartPrice = number
export type SupabaseCartLength = number

export type SupabaseCartStatus = Enums<"cart_status">

export type SupabaseCartProductQuantity = number

export default interface SupabaseCart {

    id: SupabaseCartId
    list: {

        product: SupabaseProduct
        q: SupabaseCartProductQuantity
    }[]
    price: SupabaseCartPrice
    cartLength: SupabaseCartLength
    status: SupabaseCartStatus
}