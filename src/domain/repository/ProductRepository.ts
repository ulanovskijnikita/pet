import GetProductByFilterParam from "../model/product/GetProductByFilterParam.ts";
import Product from "../model/product/Product.ts";
import ProductCategoryParam from "../model/product/ProductCategoryParam.ts";
import SearchProductParam from "../model/product/SearchProductParam.ts";

export default interface ProductRepository {

    searchByTag(param: SearchProductParam): Promise<Product[]>

    getByCategory(param: ProductCategoryParam): Promise<Product[]>

    getByFilter(param: GetProductByFilterParam): Promise<Product[]>
}