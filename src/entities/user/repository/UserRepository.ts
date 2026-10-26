import { ProductIsFavorites } from "../../../shared/model/entities/Product.ts";
import ToggleFavouriteProductParam from "../model/param/ToggleUserFafouriteParam.ts";
import { UserEmail, UserId, UserRateMessage, UserStatus } from "../../../shared/model/entities/User.ts";
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

    signOut(): void
}