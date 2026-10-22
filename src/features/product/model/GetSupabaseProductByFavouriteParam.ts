import SupabaseProductRange from "../../storage/model/product/SupabaseProductRange";
import { SupabaseUserId } from "../../storage/model/user/SupabaseUser";

export default interface GetSupabaseProductByFavouriteParam extends SupabaseProductRange {

    id: SupabaseUserId | null
}