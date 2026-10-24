import { SupabaseUserId } from "../../../user/model/SupabaseUser"
import { SupabaseProductId } from "../SupabaseProduct"

export default interface GetSupabaseProductByIdParam {

    productId: SupabaseProductId
    userId: SupabaseUserId | null
}