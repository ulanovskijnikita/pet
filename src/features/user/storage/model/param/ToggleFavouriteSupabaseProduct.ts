import { SupabaseProductId } from "../../../../product/storage/model/SupabaseProduct"
import { SupabaseUserId } from "../SupabaseUser"

export default interface ToggleFavouriteSupabaseProduct {

    userId: SupabaseUserId | null
    productId: SupabaseProductId
}
