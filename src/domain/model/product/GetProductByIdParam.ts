import { UserId } from "../user/User";
import { ProductId } from "./Product";

export default interface GetProductByIdParam {

    productId: ProductId
    userId: UserId
}