import { Enums } from "../../../../shared/lib/supabase/database.types"

export type StorageProductSubcategoryId = number
export type StorageProductSubcategoryValue = Enums<"subcategories">

export default interface StorageProductSubcategory {

    id: StorageProductSubcategoryId,
    value: StorageProductSubcategoryValue
}