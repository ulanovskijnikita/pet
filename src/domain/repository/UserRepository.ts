import { ProductIsFavorites } from "../model/product/Product.ts";
import AddToUserCartParam from "../model/user/AddToUserCartParam.ts";
import AuthenticationUserParam from "../model/user/AuthenticationUserParam.ts";
import QuantityProductRes from "../model/user/QuantityProductRes.ts";
import RegisterUserParam from "../model/user/RegisterUserParam.ts";
import SendMessageParam from "../model/user/SendMessageParam.ts";
import ToggleUserFavouriteParam from "../model/user/ToggleUserFafouriteParam.ts";
import User, { UserEmail, UserId, UserStatus } from "../model/user/User.ts";
import UserCart from "../model/user/UserCart.ts";
import UserCartPreview, { UserCartLength } from "../model/user/UserCartPreview.ts";
import UserHistory from "../model/user/UserHistory.ts";
import ValidateUserParam from "../model/user/ValidateUserParam.ts";
import ValidateUserRes from "../model/user/ValidateUserRes.ts";

export default interface UserRepository {

    identityUser(email: UserEmail): Promise<UserId | null>
        
    authenticationUser(param: AuthenticationUserParam): Promise<UserId | null>

    authorizationUser(id: UserId): Promise<User | null>

    get(): User | null

    toggleFavourite(param: ToggleUserFavouriteParam): Promise<ProductIsFavorites>

    validateUser(param: ValidateUserParam): Promise<ValidateUserRes>
    
    register(param: RegisterUserParam): Promise<void>

    addToCart(param: AddToUserCartParam): Promise<UserCartLength>

    sendMessage(param: SendMessageParam): Promise<UserStatus>

    getCart(id: UserId | null): Promise<UserCart[]>

    setQuantityCartProduct(param: AddToUserCartParam): Promise<QuantityProductRes>

    changeQuantityCartProduct(param: AddToUserCartParam): Promise<QuantityProductRes>

    getAnOrder(id: UserId | null): Promise<UserCartPreview>

    getHistoryList(id: UserId | null): Promise<UserHistory[]>
}