import { ProductIsFavorites } from "../model/product/Product.ts";
import AddToUserCartParam from "../model/user/AddToUserCartParam.ts";
import QuantityProductRes from "../model/user/QuantityProductRes.ts";
import RegisterUserParam from "../model/user/RegisterUserParam.ts";
import SendMessageParam from "../model/user/SendMessageParam.ts";
import ToggleUserFavouriteParam from "../model/user/ToggleUserFafouriteParam.ts";
import User, { UserEmail, UserId, UserStatus } from "../model/user/User.ts";
import UserCart from "../model/user/UserCart.ts";
import UserCartPreview, { UserCartLength } from "../model/user/UserCartPreview.ts";
import UserSignInResponse from "../model/user/UserSignInResponse.ts";
import ValidateUserParam from "../model/user/ValidateUserParam.ts";
import ValidateUserRes from "../model/user/ValidateUserRes.ts";

export interface UserRepository {

    getSignInResponse(userEmail: UserEmail): Promise<UserSignInResponse>

    getUserById(id: UserId): Promise<User>

    get(): User | null

    toggleFavourite(param: ToggleUserFavouriteParam): Promise<ProductIsFavorites>

    validateUser(param: ValidateUserParam): Promise<ValidateUserRes>
    
    register(param: RegisterUserParam): Promise<void>

    addToCart(param: AddToUserCartParam): Promise<UserCartLength>

    sendMessage(param: SendMessageParam): Promise<UserStatus>

    getCart(id: UserId): Promise<UserCart[]>

    setQuantityCartProduct(param: AddToUserCartParam): Promise<QuantityProductRes>

    changeQuantityCartProduct(param: AddToUserCartParam): Promise<QuantityProductRes>

    getAnOrder(id: UserId): Promise<UserCartPreview>
}