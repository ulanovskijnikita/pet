import { SupabaseProductId } from "../../../product/model/SupabaseProduct"
import { SupabaseUserId } from "./SupabaseUser"

export default interface SupabaseToggleUserFavouriteParam {

    userId: SupabaseUserId | null
    productId: SupabaseProductId
}