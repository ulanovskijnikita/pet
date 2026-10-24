import GetSupabaseProductByCategoryParam from "./model/param/GetSupabaseProductByCategoryParam"
import GetSupabaseProductByFavouriteParam from "./model/param/GetSupabaseProductByFavouriteParam"
import GetSupabaseProductByFilterParam from "./model/param/GetSupabaseProductByFilterParam"
import GetSupabaseProductByIdParam from "./model/param/GetSupabaseProductByIdParam"
import GetSupabaseProductsByCartParam from "./model/param/GetSupabaseProductsByCartParam"
import SetSupabaseProductRatingParam from "./model/param/SetSupabaseProductRatingParam"
import GetSupabaseProductsByCartRes from "./model/res/GetSupabaseProductsByCartRes"
import SetSupabaseProductRatingRes from "./model/res/SetSupabaseProductRatingRes"
import SupabaseProduct from "./model/SupabaseProduct"
import SupabaseProductDetails from "./model/SupabaseProductDetails"

export default interface ProductStorage {

    getByCategory(param: GetSupabaseProductByCategoryParam): Promise<SupabaseProduct[]>

    getByFilter(param: GetSupabaseProductByFilterParam): Promise<SupabaseProduct[]>

    getByFavourite(param: GetSupabaseProductByFavouriteParam): Promise<SupabaseProduct[]>

    getById(param: GetSupabaseProductByIdParam): Promise<SupabaseProductDetails | null>

    getByCart(param: GetSupabaseProductsByCartParam): Promise<GetSupabaseProductsByCartRes[]>

    getRating(param: SetSupabaseProductRatingParam): Promise<SetSupabaseProductRatingRes>
}