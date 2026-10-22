import GetSupabaseProductByFavouriteParam from "../model/GetSupabaseProductByFavouriteParam"
import GetSupabaseProductByFilterParam from "../model/GetSupabaseProductByFilterParam"
import GetSupabaseProductByIdParam from "../model/GetSupabaseProductByIdParam"
import GetSupabaseProductsByCartParam from "../model/GetSupabaseProductsByCartParam"
import GetSupabaseProductsByCartRes from "../model/GetSupabaseProductsByCartRes"
import SetSupabaseProductRatingParam from "../model/SetSupabaseProductRatingParam"
import SetSupabaseProductRatingRes from "../model/SetSupabaseProductRatingRes"
import SupabaseProduct from "../model/SupabaseProduct"
import SupabaseProductCategoryParam from "../model/SupabaseProductCategoryParam"
import SupabaseProductDetails from "../model/SupabaseProductDetails"


export default interface ProductStorage {

    getByCategory(param: SupabaseProductCategoryParam): Promise<SupabaseProduct[]>

    getByFilter(param: GetSupabaseProductByFilterParam): Promise<SupabaseProduct[]>

    getByFavourite(param: GetSupabaseProductByFavouriteParam): Promise<SupabaseProduct[]>

    getById(param: GetSupabaseProductByIdParam): Promise<SupabaseProductDetails | null>

    getByCart(param: GetSupabaseProductsByCartParam): Promise<GetSupabaseProductsByCartRes[]>

    getRating(param: SetSupabaseProductRatingParam): Promise<SetSupabaseProductRatingRes>
}