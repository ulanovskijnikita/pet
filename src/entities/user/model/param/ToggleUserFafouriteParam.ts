import { ProductId } from "../../../product/model/Product";
import { UserId } from "../User";

export default interface ToggleFavouriteProductParam {

    userId: UserId | null
    productId: ProductId
}