import { UserId } from "../../../../shared/model/entities/User";
import { CartId } from "../../../cart/model/CartPreview";

export default interface GetProductsByCartUseCaseParam {

    userId: UserId
    cartId: CartId
}