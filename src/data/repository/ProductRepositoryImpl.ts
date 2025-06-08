import Product from "../../domain/model/product/Product.ts";
import ProductRepository from "../../domain/repository/ProductRepository.ts";
import ProductStorage from "../storage/product/ProductStorage.ts";
import SupabaseProduct from "../storage/model/product/SupabaseProduct.ts";
import ProductCategoryParam from "../../domain/model/product/ProductCategoryParam.ts";
import GetProductByFilterParam from "../../domain/model/product/GetProductByFilterParam.ts";
import GetProductByFavouriteParam from "../../domain/model/product/GetProductByFavouriteParam.ts";
import GetProductByIdParam from "../../domain/model/product/GetProductByIdParam.ts";
import ProductDetails from "../../domain/model/product/ProductDetails.ts";
import SupabaseProductDetails from "../storage/model/product/SupabaseProductDetails.ts";
import GetProductsByCartParam from "../../domain/model/product/GetProductsByCartParam.ts";
import GetProductsByCartRes from "../../domain/model/product/GetProductsByCartRes.ts";
import GetSupabaseProductsByCartRes from "../storage/model/product/GetSupabaseProductsByCartRes.ts";
import SetProductRatingUseCaseParam from "../../domain/model/product/SetProductRatingUseCaseParam.ts";
import SetProductRatingUseCaseRes from "../../domain/model/product/SetProductRatingUseCaseRes.ts";
import SetSupabaseProductRatingRes from "../storage/model/product/SetSupabaseProductRatingRes.ts";

export default class ProductRepositoryImpl implements ProductRepository {

    constructor(

        private readonly supabaseProductStorage: ProductStorage,
    ) {}

    async setRating(param: SetProductRatingUseCaseParam): Promise<SetProductRatingUseCaseRes> {
        
        const setSupabaseProductRatingRes = await this.supabaseProductStorage.getRating(param)

        return this.mapSetSupabaseProductRatingResToSetProductRatingRes( setSupabaseProductRatingRes )
    }

    async getByCart(param: GetProductsByCartParam): Promise<GetProductsByCartRes[]> {
        
        const getSupabaseProductByCartRes = await this.supabaseProductStorage.getByCart(param)

        return this.mapGetSupabaseProductByCartResToGetProductByCartRes( getSupabaseProductByCartRes )
    }

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

    private mapSetSupabaseProductRatingResToSetProductRatingRes(setSupabaseProductRatingRes: SetSupabaseProductRatingRes): SetProductRatingUseCaseRes {

        return {

            prodyctRating: setSupabaseProductRatingRes.product_rating,
            userRating: setSupabaseProductRatingRes.user_rating
        }
    }

    private mapGetSupabaseProductByCartResToGetProductByCartRes(getSupabaseProductByCartRes: GetSupabaseProductsByCartRes[]): GetProductsByCartRes[] {

        return getSupabaseProductByCartRes.map(

            (supabaseRes) => {

                return {

                    id: supabaseRes.id,
                    img: supabaseRes.img,
                    isFavorites: supabaseRes.is_favorites,
                    priceCount: supabaseRes.price_count,
                    priceCurrency: supabaseRes.price_currency,
                    rating: supabaseRes.rating,
                    statuses: supabaseRes.statuses,
                    tag: supabaseRes.tag,
                    userRating: supabaseRes.user_rating
                }
            }
        )
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