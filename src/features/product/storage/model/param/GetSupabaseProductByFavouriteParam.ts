import { SupabaseUserId } from "../../../user/model/SupabaseUser";

export default interface GetSupabaseProductByFavouriteParam {

    id: SupabaseUserId | null
    lim: number
    off_set: number | null
}