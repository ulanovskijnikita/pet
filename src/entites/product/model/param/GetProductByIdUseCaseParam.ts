import { UserId } from "../../../user/model/User";
import { ProductId } from "../Product";

export default interface GetProductByIdUseCaseParam {

    productId: ProductId
    userId: UserId | null
}