import { SupabaseProductQuantity } from "./AddToUserCartParam"
import { SupabaseUserCartLength } from "./SupabaseUserCartPreview"

export default interface QuantitySupabaseProductRes {

    quantity: SupabaseProductQuantity
    length: SupabaseUserCartLength
}