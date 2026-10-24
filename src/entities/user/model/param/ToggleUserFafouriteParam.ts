import { ProductId } from "../../../../shared/model/entities/Product";
import { UserId } from "../../../../shared/model/entities/User";

export default interface ToggleFavouriteProductParam {

    userId: UserId | null
    productId: ProductId
}