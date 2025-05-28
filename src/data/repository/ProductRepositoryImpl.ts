import Product from "../../domain/model/product/Product.ts";
import ProductRepository from "../../domain/repository/ProductRepository.ts";
import ProductStorage from "../storage/product/ProductStorage.ts";
import SupabaseProduct from "../storage/model/product/SupabaseProduct.ts";
import ProductCategoryParam from "../../domain/model/product/ProductCategoryParam.ts";
import SearchProductParam from "../../domain/model/product/SearchProductParam.ts";
import GetProductByFilterParam from "../../domain/model/product/GetProductByFilterParam.ts";

export default class ProductRepositoryImpl implements ProductRepository {

    constructor(

        private readonly supabaseProductStorage: ProductStorage,
    ) {}

    async getByFilter(param: GetProductByFilterParam): Promise<Product[]> {
        
        const supabaseProduct = await this.supabaseProductStorage.getByFilter(param)

        return this.mapToDomain( supabaseProduct )
    }

    async getByCategory(param: ProductCategoryParam): Promise<Product[]> {
        const supabaseProduct = await this.supabaseProductStorage.getByCategory(param)

        return this.mapToDomain(supabaseProduct)
    }

    async searchByTag(param: SearchProductParam): Promise<Product[]> {

        const supabaseProduct = await this.supabaseProductStorage.searchByTag(param)

        return this.mapToDomain(supabaseProduct)
    }

    private mapToDomain(supabaseProducts: SupabaseProduct[]) {

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