import { UserId } from "../user/User";
import { UserCartId } from "../user/UserCartPreview";

export default interface GetProductsByCartParam {

    userId: UserId
    cartId: UserCartId
}