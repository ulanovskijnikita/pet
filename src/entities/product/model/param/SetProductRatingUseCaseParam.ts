import { UserId } from "../../../../shared/model/entities/User";
import { ProductId, ProductRating } from "../../../../shared/model/entities/Product";

export default interface SetProductRatingUseCaseParam {

    userId: UserId | null
    productId: ProductId
    rating: ProductRating
}