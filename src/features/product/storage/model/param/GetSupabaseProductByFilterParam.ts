import { SupabaseUserId } from "../../../user/model/SupabaseUser"
import { SupabaseProductTag } from "../SupabaseProduct"
import { SupabaseProductCategoryId } from "../SupabaseProductCategory"
import { SupabaseProductSubcategoryId } from "../SupabaseProductSubcategory"

export default interface GetSupabaseProductByFilterParam {

    userId: SupabaseUserId | null
    categoryId: SupabaseProductCategoryId
    subcategoryId: SupabaseProductSubcategoryId
    order: string
    tag: SupabaseProductTag
    lim: number
    off_set: number | null
}