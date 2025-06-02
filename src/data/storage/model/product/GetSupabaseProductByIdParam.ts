import { SupabaseUserId } from "../user/SupabaseUser"
import { SupabaseProductId } from "./SupabaseProduct"

export default interface GetSupabaseProductByIdParam {

    productId: SupabaseProductId
    userId: SupabaseUserId
}