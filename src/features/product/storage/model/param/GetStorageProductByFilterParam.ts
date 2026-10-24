import { StorageUserId } from "../../../../../shared/model/storage/StorageUser"
import { StorageProductTag } from "../../../../../shared/model/storage/StorageProduct"
import { StorageProductCategoryId } from "../StorageProductCategory"
import { StorageProductSubcategoryId } from "../StorageProductSubcategory"

export default interface GetStorageProductByFilterParam {

    userId: StorageUserId | null
    categoryId: StorageProductCategoryId
    subcategoryId: StorageProductSubcategoryId
    order: string
    tag: StorageProductTag
    lim: number
    off_set: number | null
}