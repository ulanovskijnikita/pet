import { SupabaseUserId } from "../user/SupabaseUser"
import { SupabaseProductTag } from "./SupabaseProduct"
import { SupabaseProductCategoryId } from "./SupabaseProductCategory"
import { SupabaseProductOrderId } from "./SupabaseProductOrder"
import SupabaseProductRange from "./SupabaseProductRange"
import { SupabaseProductSubcategoryId } from "./SupabaseProductSubcategory"

export default interface GetSupabaseProductByFilterParam extends SupabaseProductRange {

    userId: SupabaseUserId
    categoryId: SupabaseProductCategoryId
    subcategoryId: SupabaseProductSubcategoryId
    order: SupabaseProductOrderId
    tag: SupabaseProductTag
}