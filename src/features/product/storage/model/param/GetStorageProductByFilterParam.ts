import { StorageUserId } from "../../../user/model/StorageUser"
import { StorageProductTag } from "../StorageProduct"
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