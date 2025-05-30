import { SupabaseProductIsFavorites } from "../model/product/SupabaseProduct";
import AddToSupabaseUserCartParam from "../model/user/AddToUserCartParam";
import SupabaseRegisterUserParam from "../model/user/SupabaseRegisterUserParam";
import SupabaseToggleUserFavouriteParam from "../model/user/SupabaseToggleUserFafouriteParam";
import SupabaseUser, { SupabaseUserEmail, SupabaseUserId, SupabaseUserStatus } from "../model/user/SupabaseUser";
import SupabaseUserSignInResponse from "../model/user/SupabaseUserSignInResponse";
import SupabaseValidateUserParam from "../model/user/SupabaseValidateUserParam";
import SupabaseValidateUserRes from "../model/user/SupabaseValidateUserRes";
import SupabaseUserCartPreview, { SupabaseUserCartLength } from "../model/user/SupabaseUserCartPreview";
import SendSupabaseMessageParam from "../model/user/SendSupabaseMessageParam";
import SupabaseUserCart from "../model/user/SupabaseUserCart";
import QuantitySupabaseProductRes from "../model/user/QuantitySupabaseProductRes";

export default interface UserStorage {

    validateUser(param: SupabaseValidateUserParam): Promise<SupabaseValidateUserRes>
    
    getSignInResponse(userEmail: SupabaseUserEmail): Promise<SupabaseUserSignInResponse>

    getById(id: SupabaseUserId): Promise<SupabaseUser>

    toggleFavourite(param: SupabaseToggleUserFavouriteParam): Promise<SupabaseProductIsFavorites>

    register(param: SupabaseRegisterUserParam): Promise<void>

    addToCart(param: AddToSupabaseUserCartParam): Promise<SupabaseUserCartLength>

    sendMessage(param: SendSupabaseMessageParam): Promise<SupabaseUserStatus>

    getCart(id: SupabaseUserId): Promise<SupabaseUserCart[]>

    setQuantityCartSupabaseProduct(param: AddToSupabaseUserCartParam): Promise<QuantitySupabaseProductRes>

    changeQuantityCartSupabaseProduct(param: AddToSupabaseUserCartParam): Promise<QuantitySupabaseProductRes>

    getAnOrder(id: SupabaseUserId): Promise<SupabaseUserCartPreview>
}