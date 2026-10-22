import { ProductIsFavorites } from "../../product/model/Product.ts";
import AddToProgressCartUseCaseParam from "../../cart/model/param/AddToProgressCartUseCaseParam.ts";
import GetCartLengthUseCaseRes from "../../cart/model/res/GetCartLengthUseCaseRes.ts";
import ToggleFavouriteProductParam from "../model/param/ToggleUserFafouriteParam.ts";
import { UserEmail, UserId, UserRateMessage, UserStatus } from "../model/User.ts";
import Cart from "../../cart/model/Cart.ts";
import CartPreview, { CartLength } from "../../cart/model/CartPreview.ts";
import CartsHistory from "../../cart/model/CartsHistory.ts";
import ValidateUserParam from "../model/param/ValidateUserParam.ts";
import ValidateUserRes from "../model/res/ValidateUserRes.ts";
import GetUserUseCaseRes from "../model/res/GetUserUseCaseRes.ts";
import RegisterUserUseCaseParam from "../model/param/RegisterUserUseCaseParam.ts";
import AuthenticationUserParam from "../model/param/AuthenticationUserParam.ts";
import AuthenticationUserRes from "../model/res/AuthenticationUserRes.ts";
import IdentityUserRes from "../model/res/IdentityUserRes.ts";
import AuthorizationUserRes from "../model/res/AuthorizationUserRes.ts";

export default interface UserRepository {

    identity(email: UserEmail): Promise<IdentityUserRes>
        
    authentication(param: AuthenticationUserParam): Promise<AuthenticationUserRes>

    authorization(id: UserId): Promise<AuthorizationUserRes>

    get(): GetUserUseCaseRes

    toggleFavouriteProduct(param: ToggleFavouriteProductParam): Promise<ProductIsFavorites>

    validate(param: ValidateUserParam): Promise<ValidateUserRes>
    
    register(param: RegisterUserUseCaseParam): Promise<void>

    setRateMessage(id: UserId, message: UserRateMessage): Promise<UserStatus>
}