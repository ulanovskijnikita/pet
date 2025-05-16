import SupabaseProduct from "../model/product/SupabaseProduct.ts";
import SupabaseProductCategoryParam from "../model/product/SupabaseProductCategoryParam.ts";
import SupabaseSearchProductParam from "../model/product/SupabaseSearchProductParam.ts";

export default interface ProductStorage {

    searchByTag(param: SupabaseSearchProductParam): Promise<SupabaseProduct[]>

    getByCategory(param: SupabaseProductCategoryParam): Promise<SupabaseProduct[]>
}