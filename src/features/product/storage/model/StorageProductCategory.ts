import { Enums } from "../../../../shared/model/database.types"

export type StorageProductCategoryId = number
export type StorageProductCategoryValue = Enums<"categories">

export default interface StorageProductCategory {

    id: StorageProductCategoryId
    value: StorageProductCategoryValue
}