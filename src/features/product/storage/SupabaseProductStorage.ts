import { Database } from "../../../shared/model/database.types.ts";
import GetSupabaseProductByCategoryParam from "./model/param/GetSupabaseProductByCategoryParam.ts";
import GetSupabaseProductByFavouriteParam from "./model/param/GetSupabaseProductByFavouriteParam.ts";
import GetSupabaseProductByFilterParam from "./model/param/GetSupabaseProductByFilterParam.ts";
import GetSupabaseProductByIdParam from "./model/param/GetSupabaseProductByIdParam.ts";
import GetSupabaseProductsByCartParam from "./model/param/GetSupabaseProductsByCartParam.ts";
import SetSupabaseProductRatingParam from "./model/param/SetSupabaseProductRatingParam.ts";
import GetSupabaseProductsByCartRes from "./model/res/GetSupabaseProductsByCartRes.ts";
import SetSupabaseProductRatingRes from "./model/res/SetSupabaseProductRatingRes.ts";
import SupabaseProduct from "./model/SupabaseProduct.ts";
import SupabaseProductDetails from "./model/SupabaseProductDetails.ts";
import ProductStorage from "./ProductStorage.ts";
import {SupabaseClient} from "@supabase/supabase-js";

export default class SupabaseProductStorage implements ProductStorage {

    constructor(

        private supabaseClient: SupabaseClient<Database>
    ) {}

    async getRating(param: SetSupabaseProductRatingParam): Promise<SetSupabaseProductRatingRes> {
        
        const {data} = await this.supabaseClient.rpc("set_product_rating", {

            p_id: param.productId,
            p_r: param.rating,
            u_id: param.userId
        })

        return data![0]
    }

    async getByCart(param: GetSupabaseProductsByCartParam): Promise<GetSupabaseProductsByCartRes[]> {
        
        const {data} = await this.supabaseClient.rpc("get_products_by_cart", {

            c_id: param.cartId,
            u_id: param.userId
        })

        return data!
    }

    async getById(param: GetSupabaseProductByIdParam): Promise<SupabaseProductDetails | null> {
        
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

    async getByFavourite(param: GetSupabaseProductByFavouriteParam): Promise<SupabaseProduct[]> {
        
        const { data } = await this.supabaseClient.rpc("get_products_by_favourite", {

            lim: param.lim,
            off_set: param.off_set,
            user_auth_id: param.id
        })

        return data ? data : []
    }

    async getByFilter(param: GetSupabaseProductByFilterParam): Promise<SupabaseProduct[]> {

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

    async getByCategory(param: GetSupabaseProductByCategoryParam): Promise<SupabaseProduct[]> {

        const { data } = await this.supabaseClient
            .rpc('get_products_by_category', {

                category_id: param.categoryId,
                lim: param.lim,
                off_set: param.off_set,
                subcategory_id: param.subcategoryId,
                user_auth_id: param.userId
            })

        return data ? data : []
    }
}