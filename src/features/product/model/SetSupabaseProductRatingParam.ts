import { SupabaseUserId } from "../../storage/model/user/SupabaseUser";
import { SupabaseProductId, SupabaseProductRating } from "./SupabaseProduct";

export default interface SetSupabaseProductRatingParam {

    userId: SupabaseUserId | null
    productId: SupabaseProductId
    rating: SupabaseProductRating
}