import { UserId } from "../../../../shared/model/entities/User";
import { CartId } from "../../../../shared/model/entities/Cart";

export default interface GetProductsByCartUseCaseParam {

    userId: UserId
    cartId: CartId
}