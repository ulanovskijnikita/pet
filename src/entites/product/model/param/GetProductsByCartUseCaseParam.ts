import { UserId } from "../../../user/model/User";
import { CartId } from "../../../cart/model/CartPreview";

export default interface GetProductsByCartUseCaseParam {

    userId: UserId | null
    cartId: CartId
}