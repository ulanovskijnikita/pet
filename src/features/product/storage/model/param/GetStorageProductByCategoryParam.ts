import {StorageUserId} from "../../../user/model/StorageUser.ts";
import {StorageProductCategoryId} from "../StorageProductCategory.ts";
import {StorageProductSubcategoryId} from "../StorageProductSubcategory.ts";

export default interface GetStorageProductByCategoryParam {

    userId: StorageUserId | null
    categoryId: StorageProductCategoryId
    subcategoryId: StorageProductSubcategoryId
    lim: number
    off_set: number | null
}