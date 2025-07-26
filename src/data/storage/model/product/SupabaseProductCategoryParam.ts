import {SupabaseUserId} from "../user/SupabaseUser.ts";
import {SupabaseProductCategoryId} from "./SupabaseProductCategory.ts";
import {SupabaseProductSubcategoryId} from "./SupabaseProductSubcategory.ts";
import SupabaseProductRange from "./SupabaseProductRange.ts";


export default interface SupabaseProductCategoryParam extends SupabaseProductRange{

    userId: SupabaseUserId | null
    categoryId: SupabaseProductCategoryId
    subcategoryId: SupabaseProductSubcategoryId
}