import { SupabaseProductIsFavorites } from "../model/product/SupabaseProduct";
import SupabaseRegisterUserParam from "../model/user/SupabaseRegisterUserParam";
import SupabaseToggleUserFavouriteParam from "../model/user/SupabaseToggleUserFafouriteParam";
import SupabaseUser, { SupabaseUserEmail, SupabaseUserId } from "../model/user/SupabaseUser";
import SupabaseUserSignInResponse from "../model/user/SupabaseUserSignInResponse";
import SupabaseValidateUserParam from "../model/user/SupabaseValidateUserParam";
import SupabaseValidateUserRes from "../model/user/SupabaseValidateUserRes";
import { SupabaseUserCartLength } from "../model/user/UserCart";

export default interface UserStorage {

    validateUser(param: SupabaseValidateUserParam): Promise<SupabaseValidateUserRes>
    
    getSignInResponse(userEmail: SupabaseUserEmail): Promise<SupabaseUserSignInResponse>

    getById(id: SupabaseUserId):  Promise<SupabaseUser>

    toggleFavourite(param: SupabaseToggleUserFavouriteParam): Promise<SupabaseProductIsFavorites>

    getCartLength(id: SupabaseUserId): Promise<SupabaseUserCartLength>

    register(param: SupabaseRegisterUserParam): Promise<void>
}