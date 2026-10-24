import { SupabaseUserId } from "../../../user/model/SupabaseUser";
import { SupabaseProductId, SupabaseProductRating } from "../SupabaseProduct";

export default interface SetSupabaseProductRatingParam {

    userId: SupabaseUserId | null
    productId: SupabaseProductId
    rating: SupabaseProductRating
}