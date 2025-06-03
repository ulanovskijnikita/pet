import Product from "../../domain/model/product/Product.ts";
import ProductRepository from "../../domain/repository/ProductRepository.ts";
import ProductStorage from "../storage/product/ProductStorage.ts";
import SupabaseProduct from "../storage/model/product/SupabaseProduct.ts";
import ProductCategoryParam from "../../domain/model/product/ProductCategoryParam.ts";
import SearchProductParam from "../../domain/model/product/SearchProductParam.ts";
import GetProductByFilterParam from "../../domain/model/product/GetProductByFilterParam.ts";
import GetProductByFavouriteParam from "../../domain/model/product/GetProductByFavouriteParam.ts";
import GetProductByIdParam from "../../domain/model/product/GetProductByIdParam.ts";
import ProductDetails from "../../domain/model/product/ProductDetails.ts";
import SupabaseProductDetails from "../storage/model/product/SupabaseProductDetails.ts";

export default class ProductRepositoryImpl implements ProductRepository {

    constructor(

        private readonly supabaseProductStorage: ProductStorage,
    ) {}

    async getById(param: GetProductByIdParam): Promise<ProductDetails | null> {
        
        return this.mapSupabaseProductDetailsToProductDetails( await this.supabaseProductStorage.getById(param) )
    }

    async getByFavourite(param: GetProductByFavouriteParam): Promise<Product[]> {
        
        const supabaseProduct = await this.supabaseProductStorage.getByFavourite(param)

        return this.mapSupabaseProductToProduct( supabaseProduct )
    }

    async getByFilter(param: GetProductByFilterParam): Promise<Product[]> {
        
        const supabaseProduct = await this.supabaseProductStorage.getByFilter(param)

        return this.mapSupabaseProductToProduct( supabaseProduct )
    }

    async getByCategory(param: ProductCategoryParam): Promise<Product[]> {
        const supabaseProduct = await this.supabaseProductStorage.getByCategory(param)

        return this.mapSupabaseProductToProduct(supabaseProduct)
    }

    async searchByTag(param: SearchProductParam): Promise<Product[]> {

        const supabaseProduct = await this.supabaseProductStorage.searchByTag(param)

        return this.mapSupabaseProductToProduct(supabaseProduct)
    }

    private mapSupabaseProductDetailsToProductDetails(supabaseProductDetails: SupabaseProductDetails | null): ProductDetails | null {

        if (supabaseProductDetails) {
            return {

                category: supabaseProductDetails.category,
                desc: supabaseProductDetails.product_desc,
                id: supabaseProductDetails.id,
                img: supabaseProductDetails.img,
                isFavorites: supabaseProductDetails.is_favorites,
                priceCount: supabaseProductDetails.price_count,
                priceCurrency: supabaseProductDetails.price_currency,
                rating: supabaseProductDetails.rating,
                statuses: supabaseProductDetails.statuses,
                subcategory: supabaseProductDetails.subcategory,
                tag: supabaseProductDetails.tag
            }
        } else {

            return supabaseProductDetails
        }
    }

    private mapSupabaseProductToProduct(supabaseProducts: SupabaseProduct[]): Product[] {

        return supabaseProducts.map(it => {

            const product: Product = {
                id: it.id,
                priceCurrency: it.price_currency,
                statuses: it.statuses,
                priceCount: it.price_count,
                tag: it.tag,
                img: it.img,
                rating: it.rating,
                isFavorites: it.is_favorites
            }

            return product
        })
    }
}