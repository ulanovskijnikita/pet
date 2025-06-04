import { SupabaseUserId } from "../user/SupabaseUser";
import { SupabaseProductId, SupabaseProductRating } from "./SupabaseProduct";

export default interface SetSupabaseProductRatingParam {

    userId: SupabaseUserId
    productId: SupabaseProductId
    rating: SupabaseProductRating
}