import SupabaseProduct from "./SupabaseProduct.ts";
import {Enums} from "../../../../infrastructure/supabase/database.types.ts";
import SupabaseProductCategory from "./SupabaseProductCategory.ts";

export type SupabaseProductDesc = string

export type SupabaseProductSubcategory = Enums<"subcategories">

export type SupabaseProductUserRating = Enums<"product_rating">

export default interface SupabaseProductDetails extends SupabaseProduct{

    desc: SupabaseProductDesc
    category: SupabaseProductCategory
    subcategory: SupabaseProductSubcategory
    userRating: SupabaseProductUserRating
}