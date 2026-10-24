import { ProductRating } from "../../../../shared/model/entities/Product";

export default interface SetProductRatingUseCaseRes {

    userRating: ProductRating
    productRating: ProductRating
}