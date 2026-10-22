import { SupabaseProductId } from "../../../product/model/SupabaseProduct"
import { SupabaseUserId } from "./SupabaseUser"

export type SupabaseProductQuantity = number

export default interface AddToSupabaseUserCartParam {

    userId: SupabaseUserId | null
    productId: SupabaseProductId
    quantity: SupabaseProductQuantity
}