import GetProductsByCartUseCaseRes from "../model/res/GetProductsByCartUseCaseRes"
import Product from "../model/Product"
import ProductDetails from "../model/ProductDetails"
import GetProductByFavouriteUseCaseParam from "../model/param/GetProductByFavouriteUseCaseParam"
import GetProductByFilterUseCaseParam from "../model/param/GetProductByFilterUseCaseParam"
import GetProductByIdUseCaseParam from "../model/param/GetProductByIdUseCaseParam"
import GetProductsByCartUseCaseParam from "../model/param/GetProductsByCartUseCaseParam"
import GetProductByCategoryUseCaseParam from "../model/param/GetProductByCategoryUseCaseParam"
import SetProductRatingUseCaseParam from "../model/param/SetProductRatingUseCaseParam"
import SetProductRatingUseCaseRes from "../model/res/SetProductRatingUseCaseRes"

export default interface ProductRepository {

    getByCategory(param: GetProductByCategoryUseCaseParam): Promise<Product[]>

    getByFilter(param: GetProductByFilterUseCaseParam): Promise<Product[]>

    getByFavourite(param: GetProductByFavouriteUseCaseParam): Promise<Product[]>

    getById(param: GetProductByIdUseCaseParam): Promise<ProductDetails | null>

    getByCart(param: GetProductsByCartUseCaseParam): Promise<GetProductsByCartUseCaseRes[]>

    setRating(param: SetProductRatingUseCaseParam): Promise<SetProductRatingUseCaseRes>
}