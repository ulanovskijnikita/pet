import { ProductIsFavorites } from "../model/product/Product.ts";
import AddToUserCartParam from "../model/user/AddToUserCartParam.ts";
import RegisterUserParam from "../model/user/RegisterUserParam.ts";
import ToggleUserFavouriteParam from "../model/user/ToggleUserFafouriteParam.ts";
import User, { UserEmail, UserId } from "../model/user/User.ts";
import { UserCartLength } from "../model/user/UserCart.ts";
import UserSignInResponse from "../model/user/UserSignInResponse.ts";
import ValidateUserParam from "../model/user/ValidateUserParam.ts";
import ValidateUserRes from "../model/user/ValidateUserRes.ts";

export interface UserRepository {

    getSignInResponse(userEmail: UserEmail): Promise<UserSignInResponse>

    getUserById(id: UserId): Promise<User>

    get(): User | null

    toggleFavourite(param: ToggleUserFavouriteParam): Promise<ProductIsFavorites>

    getCartLength(id: UserId): Promise<UserCartLength>

    validateUser(param: ValidateUserParam): Promise<ValidateUserRes>
    
    register(param: RegisterUserParam): Promise<void>

    addToCart(param: AddToUserCartParam): Promise<void>
}