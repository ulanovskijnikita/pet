import { UserId } from "../../../user/model/User";
import { ProductId, ProductRating } from "../Product";

export default interface SetProductRatingUseCaseParam {

    userId: UserId | null
    productId: ProductId
    rating: ProductRating
}