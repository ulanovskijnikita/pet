import SupabaseProductRange from "../model/product/SupabaseProductRange";
import { SupabaseUserId } from "../model/user/SupabaseUser";

export default interface GetSupabaseProductByFavouriteParam extends SupabaseProductRange {

    id: SupabaseUserId
}