import { SupabaseProductIsFavorites } from "../../product/storage/model/SupabaseProduct"
import AuthenticationSupabaseUserParam from "./model/param/AuthenticationSupabaseUserParam"
import RegisterSupabaseUserParam from "./model/param/RegisterSupabaseUserParam"
import ValidateSupabaseUserParam from "./model/param/ValidateSupabaseUserParam"
import IdentitySupabaseUserRes from "./model/res/IdentitySupabaseUserRes"
import ValidateSupabaseUserRes from "./model/res/ValidateSupabaseUserRes"
import { SupabaseUserEmail, SupabaseUserId, SupabaseUserRateMessage, SupabaseUserStatus } from "./model/SupabaseUser"
import AuthenticationSupabaseUserRes from "./model/res/AuthenticationSupabaseUserRes"
import AuthorizationSupabaseUserRes from "./model/res/AuthorizationSupabaseUserRes"
import ToggleFavouriteSupabaseProduct from "./model/param/ToggleFavouriteSupabaseProduct"

export default interface UserStorage {

    validate(param: ValidateSupabaseUserParam): Promise<ValidateSupabaseUserRes>

    identity(email: SupabaseUserEmail): Promise<IdentitySupabaseUserRes>
    
    authentication(param: AuthenticationSupabaseUserParam): Promise<AuthenticationSupabaseUserRes>

    authorization(id: SupabaseUserId): Promise<AuthorizationSupabaseUserRes>

    toggleFavouriteProduct(param: ToggleFavouriteSupabaseProduct): Promise<SupabaseProductIsFavorites>

    register(param: RegisterSupabaseUserParam): Promise<void>

    setRateMessage(id: SupabaseUserId, message: SupabaseUserRateMessage): Promise<SupabaseUserStatus>
}