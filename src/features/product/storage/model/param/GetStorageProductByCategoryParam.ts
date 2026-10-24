import { StorageUserId } from "../../../../../shared/model/storage/StorageUser";
import {StorageProductCategoryId} from "../StorageProductCategory.ts";
import {StorageProductSubcategoryId} from "../StorageProductSubcategory.ts";

export default interface GetStorageProductByCategoryParam {

    userId: StorageUserId | null
    categoryId: StorageProductCategoryId
    subcategoryId: StorageProductSubcategoryId
    lim: number
    off_set: number | null
}