import { SupabaseUserId } from "../../storage/model/user/SupabaseUser"
import { SupabaseProductTag } from "../../storage/model/product/SupabaseProduct"
import { SupabaseProductCategoryId } from "../../storage/model/product/SupabaseProductCategory"
import SupabaseProductOrder from "../../storage/model/product/SupabaseProductOrder"
import SupabaseProductRange from "../../storage/model/product/SupabaseProductRange"
import { SupabaseProductSubcategoryId } from "../../storage/model/product/SupabaseProductSubcategory"

export default interface GetSupabaseProductByFilterParam extends SupabaseProductRange {

    userId: SupabaseUserId | null
    categoryId: SupabaseProductCategoryId
    subcategoryId: SupabaseProductSubcategoryId
    order: SupabaseProductOrder
    tag: SupabaseProductTag
}