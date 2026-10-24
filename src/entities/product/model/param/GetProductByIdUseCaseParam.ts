import { UserId } from "../../../../shared/model/entities/User";
import { ProductId } from "../../../../shared/model/entities/Product";

export default interface GetProductByIdUseCaseParam {

    productId: ProductId
    userId: UserId | null
}