import { Enums } from "../../../../shared/model/database.types"

export type SupabaseProductSubcategoryId = number
export type SupabaseProductSubcategoryValue = Enums<"subcategories">

export default interface SupabaseProductSubcategory {

    id: SupabaseProductSubcategoryId,
    value: SupabaseProductSubcategoryValue
}