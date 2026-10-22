import Product from "../../../entites/product/model/Product.ts";
import SupabaseProduct from "../model/SupabaseProduct.ts";
import ProductCategoryUseCaseParam from "../../../entites/product/model/param/ProductCategoryUseCaseParam.ts";
import GetProductByFilterUseCaseParam from "../../../entites/product/model/param/GetProductByFilterUseCaseParam.ts";
import GetProductByFavouriteUseCaseParam from "../../../entites/product/model/param/GetProductByFavouriteUseCaseParam.ts";
import GetProductByIdUseCaseParam from "../../../entites/product/model/param/GetProductByIdUseCaseParam.ts";
import ProductDetails from "../../../entites/product/model/ProductDetails.ts";
import SupabaseProductDetails from "../model/SupabaseProductDetails.ts";
import GetProductsByCartUseCaseParam from "../../../entites/product/model/param/GetProductsByCartUseCaseParam.ts";
import GetProductsByCartUseCaseRes from "../../../entites/product/model/res/GetProductsByCartUseCaseRes.ts";
import GetSupabaseProductsByCartRes from "../model/GetSupabaseProductsByCartRes.ts";
import SetProductRatingUseCaseParam from "../../../entites/product/model/param/SetProductRatingUseCaseParam.ts";
import SetSupabaseProductRatingRes from "../model/SetSupabaseProductRatingRes.ts";
import ProductRepository from "../../../entites/product/repository/ProductRepository.ts";
import SetProductRatingUseCaseRes from "../../../entites/product/model/res/SetProductRatingUseCaseRes.ts";
import ProductStorage from "../storage/ProductStorage.ts";

export default class ProductRepositoryImpl implements ProductRepository {

    constructor(

        private supabaseProductStorage: ProductStorage,
    ) {}

    async setRating(param: SetProductRatingUseCaseParam): Promise<SetProductRatingUseCaseRes> {
        
        const setSupabaseProductRatingRes = await this.supabaseProductStorage.getRating(param)

        return this.mapSetSupabaseProductRatingResToSetProductRatingRes( setSupabaseProductRatingRes )
    }

    async getByCart(param: GetProductsByCartUseCaseParam): Promise<GetProductsByCartUseCaseRes[]> {
        
        const getSupabaseProductByCartRes = await this.supabaseProductStorage.getByCart(param)

        return this.mapGetSupabaseProductByCartResToGetProductByCartRes( getSupabaseProductByCartRes )
    }

    async getById(param: GetProductByIdUseCaseParam): Promise<ProductDetails | null> {
        
        return this.mapSupabaseProductDetailsToProductDetails( await this.supabaseProductStorage.getById(param) )
    }

    async getByFavourite(param: GetProductByFavouriteUseCaseParam): Promise<Product[]> {
        
        const supabaseProduct = await this.supabaseProductStorage.getByFavourite(param)

        return this.mapSupabaseProductToProduct( supabaseProduct )
    }

    async getByFilter(param: GetProductByFilterUseCaseParam): Promise<Product[]> {
        
        const supabaseProduct = await this.supabaseProductStorage.getByFilter(param)

        return this.mapSupabaseProductToProduct( supabaseProduct )
    }

    async getByCategory(param: ProductCategoryUseCaseParam): Promise<Product[]> {
        const supabaseProduct = await this.supabaseProductStorage.getByCategory(param)

        return this.mapSupabaseProductToProduct(supabaseProduct)
    }

    private mapSetSupabaseProductRatingResToSetProductRatingRes(setSupabaseProductRatingRes: SetSupabaseProductRatingRes): SetProductRatingUseCaseRes {

        return {

            productRating: setSupabaseProductRatingRes.product_rating,
            userRating: setSupabaseProductRatingRes.user_rating
        }
    }

    private mapGetSupabaseProductByCartResToGetProductByCartRes(getSupabaseProductByCartRes: GetSupabaseProductsByCartRes[]): GetProductsByCartUseCaseRes[] {

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