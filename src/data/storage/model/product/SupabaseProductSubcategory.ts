import { Enums } from "../supabase/database.types"

export type SupabaseProductSubcategoryId = number
export type SupabaseProductSubcategoryValue = Enums<"subcategories">

export default interface SupabaseProductSubcategory {

    id: SupabaseProductSubcategoryId,
    value: SupabaseProductSubcategoryValue
}