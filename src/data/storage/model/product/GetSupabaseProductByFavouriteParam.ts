import SupabaseProductRange from "./SupabaseProductRange";
import { SupabaseUserId } from "../user/SupabaseUser";

export default interface GetSupabaseProductByFavouriteParam extends SupabaseProductRange {

    id: SupabaseUserId
}