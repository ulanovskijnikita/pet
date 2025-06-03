import GetSupabaseProductByFilterParam from "../model/product/GetSupabaseProductByFilterParam.ts";
import GetSupabaseProductByIdParam from "../model/product/GetSupabaseProductByIdParam.ts";
import SupabaseProduct from "../model/product/SupabaseProduct.ts";
import SupabaseProductCategoryParam from "../model/product/SupabaseProductCategoryParam.ts";
import SupabaseProductDetails from "../model/product/SupabaseProductDetails.ts";
import SupabaseSearchProductParam from "../model/product/SupabaseSearchProductParam.ts";
import GetSupabaseProductByFavouriteParam from "./GetSupabaseProductByFavouriteParam.ts";

export default interface ProductStorage {

    searchByTag(param: SupabaseSearchProductParam): Promise<SupabaseProduct[]>

    getByCategory(param: SupabaseProductCategoryParam): Promise<SupabaseProduct[]>

    getByFilter(param: GetSupabaseProductByFilterParam): Promise<SupabaseProduct[]>

    getByFavourite(param: GetSupabaseProductByFavouriteParam): Promise<SupabaseProduct[]>

    getById(param: GetSupabaseProductByIdParam): Promise<SupabaseProductDetails | null>
}