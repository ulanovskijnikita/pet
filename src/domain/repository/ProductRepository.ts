import GetProductByFavouriteParam from "../model/product/GetProductByFavouriteParam.ts";
import GetProductByFilterParam from "../model/product/GetProductByFilterParam.ts";
import GetProductByIdParam from "../model/product/GetProductByIdParam.ts";
import GetProductsByCartParam from "../model/product/GetProductsByCartParam.ts";
import GetProductsByCartRes from "../model/product/GetProductsByCartRes.ts";
import Product from "../model/product/Product.ts";
import ProductCategoryParam from "../model/product/ProductCategoryParam.ts";
import ProductDetails from "../model/product/ProductDetails.ts";
import SearchProductParam from "../model/product/SearchProductParam.ts";
import SetProductRatingUseCaseParam from "../model/product/SetProductRatingUseCaseParam.ts";
import SetProductRatingUseCaseRes from "../model/product/SetProductRatingUseCaseRes.ts";

export default interface ProductRepository {

    searchByTag(param: SearchProductParam): Promise<Product[]>

    getByCategory(param: ProductCategoryParam): Promise<Product[]>

    getByFilter(param: GetProductByFilterParam): Promise<Product[]>

    getByFavourite(param: GetProductByFavouriteParam): Promise<Product[]>

    getById(param: GetProductByIdParam): Promise<ProductDetails | null>

    getByCart(param: GetProductsByCartParam): Promise<GetProductsByCartRes[]>

    setRating(param: SetProductRatingUseCaseParam): Promise<SetProductRatingUseCaseRes>
}