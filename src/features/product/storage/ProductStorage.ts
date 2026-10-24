import GetStorageProductByCategoryParam from "./model/param/GetStorageProductByCategoryParam"
import GetStorageProductByFavouriteParam from "./model/param/GetStorageProductByFavouriteParam"
import GetStorageProductByFilterParam from "./model/param/GetStorageProductByFilterParam"
import GetStorageProductByIdParam from "./model/param/GetStorageProductByIdParam"
import GetStorageProductsByCartParam from "./model/param/GetStorageProductsByCartParam"
import SetStorageProductRatingParam from "./model/param/SetStorageProductRatingParam"
import GetStorageProductsByCartRes from "./model/res/GetStorageProductsByCartRes"
import SetStorageProductRatingRes from "./model/res/SetStorageProductRatingRes"
import StorageProduct from "./model/StorageProduct"
import StorageProductDetails from "./model/StorageProductDetails"

export default interface ProductStorage {

    getByCategory(param: GetStorageProductByCategoryParam): Promise<StorageProduct[]>

    getByFilter(param: GetStorageProductByFilterParam): Promise<StorageProduct[]>

    getByFavourite(param: GetStorageProductByFavouriteParam): Promise<StorageProduct[]>

    getById(param: GetStorageProductByIdParam): Promise<StorageProductDetails | null>

    getByCart(param: GetStorageProductsByCartParam): Promise<GetStorageProductsByCartRes[]>

    getRating(param: SetStorageProductRatingParam): Promise<SetStorageProductRatingRes>
}