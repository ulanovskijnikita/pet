import ProductStorage from "./ProductStorage.ts";
import {SupabaseClient} from "@supabase/supabase-js";
import {Database} from "../../storage/model/supabase/database.types.ts";
import SupabaseProduct from "../model/SupabaseProduct.ts";
import SupabaseProductCategoryParam from "../model/SupabaseProductCategoryParam.ts";
import GetSupabaseProductByFilterParam from "../model/GetSupabaseProductByFilterParam.ts";
import GetSupabaseProductByIdParam from "../model/GetSupabaseProductByIdParam.ts";
import SupabaseProductDetails from "../model/SupabaseProductDetails.ts";
import GetSupabaseProductsByCartParam from "../model/GetSupabaseProductsByCartParam.ts";
import GetSupabaseProductsByCartRes from "../model/GetSupabaseProductsByCartRes.ts";
import SetSupabaseProductRatingParam from "../model/SetSupabaseProductRatingParam.ts";
import SetSupabaseProductRatingRes from "../model/SetSupabaseProductRatingRes.ts";
import GetSupabaseProductByFavouriteParam from "../model/GetSupabaseProductByFavouriteParam.ts";

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

            lim: param.limit,
            off_set: param.offset,
            user_auth_id: param.id
        })

        return data ? data : []
    }

    async getByFilter(param: GetSupabaseProductByFilterParam): Promise<SupabaseProduct[]> {

        const [col, ascending] = param.order.split(' ');

        const { data } = await this.supabaseClient
            .rpc("get_products_by_category", {

                category_id: param.categoryId,
                lim: param.limit,
                off_set: param.offset,
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

    async getByCategory(param: SupabaseProductCategoryParam): Promise<SupabaseProduct[]> {

        const { data } = await this.supabaseClient
            .rpc('get_products_by_category', {

                category_id: param.categoryId,
                lim: param.limit,
                off_set: param.offset,
                subcategory_id: param.subcategoryId,
                user_auth_id: param.userId
            })

        return data ? data : []
    }
}