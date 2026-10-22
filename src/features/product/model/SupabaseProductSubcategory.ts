import { Enums } from "../../storage/model/supabase/database.types"

export type SupabaseProductSubcategoryId = number
export type SupabaseProductSubcategoryValue = Enums<"subcategories">

export default interface SupabaseProductSubcategory {

    id: SupabaseProductSubcategoryId,
    value: SupabaseProductSubcategoryValue
}