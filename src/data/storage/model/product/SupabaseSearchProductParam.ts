import {SupabaseUserId} from "../user/SupabaseUser.ts";
import {SupabaseProductTag} from "./SupabaseProduct.ts";
import SupabaseProductRange from "./SupabaseProductRange.ts";

export default interface SupabaseSearchProductParam extends SupabaseProductRange{

    userId: SupabaseUserId
    tag: SupabaseProductTag
}