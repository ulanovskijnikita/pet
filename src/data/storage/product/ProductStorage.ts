import GetSupabaseProductByFavouriteParam from "../model/product/GetSupabaseProductByFavouriteParam.ts";
import GetSupabaseProductByFilterParam from "../model/product/GetSupabaseProductByFilterParam.ts";
import GetSupabaseProductByIdParam from "../model/product/GetSupabaseProductByIdParam.ts";
import GetSupabaseProductsByCartParam from "../model/product/GetSupabaseProductsByCartParam.ts";
import GetSupabaseProductsByCartRes from "../model/product/GetSupabaseProductsByCartRes.ts";
import SetSupabaseProductRatingParam from "../model/product/SetSupabaseProductRatingParam.ts";
import SetSupabaseProductRatingRes from "../model/product/SetSupabaseProductRatingRes.ts";
import SupabaseProduct from "../model/product/SupabaseProduct.ts";
import SupabaseProductCategoryParam from "../model/product/SupabaseProductCategoryParam.ts";
import SupabaseProductDetails from "../model/product/SupabaseProductDetails.ts";
import SupabaseSearchProductParam from "../model/product/SupabaseSearchProductParam.ts";

export default interface ProductStorage {

    searchByTag(param: SupabaseSearchProductParam): Promise<SupabaseProduct[]>

    getByCategory(param: SupabaseProductCategoryParam): Promise<SupabaseProduct[]>

    getByFilter(param: GetSupabaseProductByFilterParam): Promise<SupabaseProduct[]>

    getByFavourite(param: GetSupabaseProductByFavouriteParam): Promise<SupabaseProduct[]>

    getById(param: GetSupabaseProductByIdParam): Promise<SupabaseProductDetails | null>

    getByCart(param: GetSupabaseProductsByCartParam): Promise<GetSupabaseProductsByCartRes[]>

    getRating(param: SetSupabaseProductRatingParam): Promise<SetSupabaseProductRatingRes>
}