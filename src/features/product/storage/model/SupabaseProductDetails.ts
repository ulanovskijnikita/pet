import SupabaseProduct from "./SupabaseProduct.ts";
import { SupabaseProductCategoryValue } from "./SupabaseProductCategory.ts";
import { SupabaseProductSubcategoryValue } from "./SupabaseProductSubcategory.ts";

export type SupabaseProductDesc = string

export default interface SupabaseProductDetails extends SupabaseProduct{

    product_desc: SupabaseProductDesc
    category: SupabaseProductCategoryValue
    subcategory: SupabaseProductSubcategoryValue
}