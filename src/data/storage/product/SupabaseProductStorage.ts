import ProductStorage from "./ProductStorage.ts";
import {SupabaseClient} from "@supabase/supabase-js";
import {Database} from "../model/supabase/database.types.ts";
import SupabaseProduct from "../model/product/SupabaseProduct.ts";
import SupabaseProductCategoryParam from "../model/product/SupabaseProductCategoryParam.ts";
import GetSupabaseProductByFilterParam from "../model/product/GetSupabaseProductByFilterParam.ts";
import GetSupabaseProductByIdParam from "../model/product/GetSupabaseProductByIdParam.ts";
import SupabaseProductDetails from "../model/product/SupabaseProductDetails.ts";
import GetSupabaseProductsByCartParam from "../model/product/GetSupabaseProductsByCartParam.ts";
import GetSupabaseProductsByCartRes from "../model/product/GetSupabaseProductsByCartRes.ts";
import SetSupabaseProductRatingParam from "../model/product/SetSupabaseProductRatingParam.ts";
import SetSupabaseProductRatingRes from "../model/product/SetSupabaseProductRatingRes.ts";
import GetSupabaseProductByFavouriteParam from "../model/product/GetSupabaseProductByFavouriteParam.ts";

type FilterAction = {

    col: keyof Database['public']['Functions']['get_products_by_category']['Returns'][0]
    ascending: boolean
}

export default class SupabaseProductStorage implements ProductStorage {

    constructor(

        private readonly supabaseClient: SupabaseClient<Database>
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

                this.filterAction[param.order].col, {ascending: this.filterAction[param.order].ascending}
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

    private filterAction: FilterAction[] = [

        {

            col: "price_count",
            ascending: false,
        },

        {

            col: "price_count",
            ascending: true,
        },
        
        {

            col: "rating",
            ascending: false,
        },
        
        {

            col: "rating",
            ascending: true,
        },

        {

            col: "tag",
            ascending: false,
        },
        
        {

            col: "tag",
            ascending: true,
        },
    ]
}