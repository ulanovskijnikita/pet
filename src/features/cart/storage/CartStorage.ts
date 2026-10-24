import { SupabaseUserId } from "../../user/storage/model/SupabaseUser"
import SetSupabaseProductQuantityParam from "./model/param/SetSupabaseProductQuantityParam"
import SupabaseCart, { SupabaseCartId, SupabaseCartLength } from "./model/SupabaseCart"
import SupabaseCartHistory from "./model/SupabaseCartHistory"

export default interface CartStorage {

    getProgressCart(id: SupabaseUserId): Promise<SupabaseCart>

    makeOrder(id: SupabaseCartId): Promise<SupabaseCart>

    getHistory(id: SupabaseUserId): Promise<SupabaseCartHistory>

    setProductQuantity(param: SetSupabaseProductQuantityParam): Promise<SupabaseCartLength>
}