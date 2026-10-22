import { SupabaseUserId } from "../../storage/model/user/SupabaseUser"
import { SupabaseUserCartId } from "../../storage/model/user/SupabaseUserCartPreview"

export default interface GetSupabaseProductsByCartParam {

    userId: SupabaseUserId | null
    cartId: SupabaseUserCartId
}