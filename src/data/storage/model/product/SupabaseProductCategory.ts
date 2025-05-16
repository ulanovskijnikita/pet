import {Enums} from "../../../../infrastructure/supabase/database.types.ts";

export type SupabaseProductCategoryId = number
export type SupabaseProductCategoryValue = Enums<"categories">

export default interface SupabaseProductCategory {

    id: SupabaseProductCategoryId
    value: SupabaseProductCategoryValue
}