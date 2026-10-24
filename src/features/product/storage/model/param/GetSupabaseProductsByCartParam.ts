import { SupabaseUserId } from "../../../user/model/SupabaseUser"
import { SupabaseUserCartId } from "../../../cart/model/SupabaseUserCartPreview"

export default interface GetSupabaseProductsByCartParam {

    userId: SupabaseUserId | null
    cartId: SupabaseUserCartId
}