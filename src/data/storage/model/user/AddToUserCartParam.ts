import { SupabaseProductId } from "../product/SupabaseProduct"
import { SupabaseUserId } from "./SupabaseUser"

export type SupabaseProductQuantity = number

export default interface AddToSupabaseUserCartParam {

    userId: SupabaseUserId
    productId: SupabaseProductId
    quantity: SupabaseProductQuantity
}