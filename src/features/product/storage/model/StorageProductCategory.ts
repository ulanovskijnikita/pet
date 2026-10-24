import { Enums } from "../../../../shared/lib/supabase/database.types"

export type StorageProductCategoryId = number
export type StorageProductCategoryValue = Enums<"categories">

export default interface StorageProductCategory {

    id: StorageProductCategoryId
    value: StorageProductCategoryValue
}