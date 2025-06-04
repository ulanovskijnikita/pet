import { SupabaseUserId } from "../user/SupabaseUser"
import { SupabaseUserCartId } from "../user/SupabaseUserCartPreview"

export default interface GetSupabaseProductsByCartParam {

    userId: SupabaseUserId
    cartId: SupabaseUserCartId
}