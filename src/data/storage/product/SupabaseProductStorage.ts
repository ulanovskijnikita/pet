import ProductStorage from "./ProductStorage.ts";
import {SupabaseClient} from "@supabase/supabase-js";
import {Database} from "../../../infrastructure/supabase/database.types.ts";
import SupabaseProduct from "../model/product/SupabaseProduct.ts";
import SupabaseProductCategoryParam from "../model/product/SupabaseProductCategoryParam.ts";
import SupabaseSearchProductParam from "../model/product/SupabaseSearchProductParam.ts";

export default class SupabaseProductStorage implements ProductStorage {

    constructor(

        private readonly supabaseClient: SupabaseClient<Database>
    ) {}

    async getByCategory(param: SupabaseProductCategoryParam): Promise<SupabaseProduct[]> {

        const { data } : { data: SupabaseProduct[] | null } = await this.supabaseClient
            .rpc('get_products_by_category', {
                category_id: param.categoryId,
                lim: param.limit,
                off_set: param.offset,
                subcategory_id: param.subcategoryId,
                user_auth_id: param.userId
            })

        return (data) ? data : []
    }

    async searchByTag(param: SupabaseSearchProductParam): Promise<SupabaseProduct[]> {
        const { data } : { data: SupabaseProduct[] | null } = await this.supabaseClient
            .rpc('search_products_by_tag', {
                search_tag: param.tag,
                lim: param.limit,
                off_set: param.offset,
                user_auth_id: param.userId
            })

        return (data) ? data : []
    }
}