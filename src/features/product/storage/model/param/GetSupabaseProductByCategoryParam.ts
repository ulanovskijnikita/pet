import {SupabaseUserId} from "../../../user/model/SupabaseUser.ts";
import {SupabaseProductCategoryId} from "../SupabaseProductCategory.ts";
import {SupabaseProductSubcategoryId} from "../SupabaseProductSubcategory.ts";

export default interface GetSupabaseProductByCategoryParam {

    userId: SupabaseUserId | null
    categoryId: SupabaseProductCategoryId
    subcategoryId: SupabaseProductSubcategoryId
    lim: number
    off_set: number | null
}