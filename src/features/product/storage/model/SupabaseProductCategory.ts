import { Enums } from "../../../../shared/model/database.types"

export type SupabaseProductCategoryId = number
export type SupabaseProductCategoryValue = Enums<"categories">

export default interface SupabaseProductCategory {

    id: SupabaseProductCategoryId
    value: SupabaseProductCategoryValue
}