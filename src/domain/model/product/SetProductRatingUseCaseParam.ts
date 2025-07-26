import { UserId } from "../user/User";
import { ProductId, ProductRating } from "./Product";

export default interface SetProductRatingUseCaseParam {

    userId: UserId | null
    productId: ProductId
    rating: ProductRating
}