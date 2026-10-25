import { Database } from "../../../shared/lib/supabase/database.types.ts";
import GetStorageProductByCategoryParam from "./model/param/GetStorageProductByCategoryParam.ts";
import GetStorageProductByFavouriteParam from "./model/param/GetStorageProductByFavouriteParam.ts";
import GetStorageProductByFilterParam from "./model/param/GetStorageProductByFilterParam.ts";
import GetStorageProductByIdParam from "./model/param/GetStorageProductByIdParam.ts";
import GetStorageProductsByCartParam from "./model/param/GetStorageProductsByCartParam.ts";
import SetStorageProductRatingParam from "./model/param/SetStorageProductRatingParam.ts";
import GetStorageProductsByCartRes from "./model/res/GetStorageProductsByCartRes.ts";
import SetStorageProductRatingRes from "./model/res/SetStorageProductRatingRes.ts";
import StorageProduct from "../../../shared/model/storage/StorageProduct.ts";
import StorageProductDetails from "./model/StorageProductDetails.ts";
import ProductStorage from "./ProductStorage.ts";
import {SupabaseClient} from "@supabase/supabase-js";

export default class SupabaseProductStorage implements ProductStorage {

    constructor(

        private supabaseClient: SupabaseClient<Database>
    ) {}

    async getRating(param: SetStorageProductRatingParam): Promise<SetStorageProductRatingRes> {
        
        const {data} = await this.supabaseClient.rpc("set_product_rating", {

            p_id: param.productId,
            p_r: param.rating,
            u_id: param.userId
        })

        return data![0]
    }

    async getByCart(param: GetStorageProductsByCartParam): Promise<GetStorageProductsByCartRes[]> {
        
        const {data} = await this.supabaseClient.rpc("get_products_by_cart", {

            c_id: param.cartId,
            u_id: param.userId
        })

        return data ?? []
    }

    async getById(param: GetStorageProductByIdParam): Promise<StorageProductDetails | null> {
        
        const {data} = await this.supabaseClient.rpc("get_product_by_id", {

            p_id: param.productId,
            u_id: param.userId
        })

        if (data?.length) {

            return data[0]
        } else {

            return null
        }
    }

    async getByFavourite(param: GetStorageProductByFavouriteParam): Promise<StorageProduct[]> {
        
        const { data } = await this.supabaseClient.rpc("get_products_by_favourite", {

            lim: param.lim,
            off_set: param.off_set,
            user_auth_id: param.id
        })

        return data ? data : []
    }

    async getByFilter(param: GetStorageProductByFilterParam): Promise<StorageProduct[]> {

        const [col, ascending] = param.order.split(' ');

        const { data } = await this.supabaseClient
            .rpc("get_products_by_category", {

                category_id: param.categoryId,
                lim: param.lim,
                off_set: param.off_set,
                subcategory_id: param.subcategoryId,
                user_auth_id: param.userId
            })
            .filter(

                'tag', 'ilike', `%${ param.tag }%`
            )
            .order(

                col, {ascending: ascending.includes('ascending')}
            )

        return data ? data : []
    }

    async getByCategory(param: GetStorageProductByCategoryParam): Promise<StorageProduct[]> {

        const { data } = await this.supabaseClient
            .rpc('get_products_by_category', {

                category_id: param.categoryId,
                lim: param.lim,
                off_set: param.off_set,
                subcategory_id: param.subcategoryId,
                user_auth_id: param.userId,
            })

        return data ? data : []
    }
}