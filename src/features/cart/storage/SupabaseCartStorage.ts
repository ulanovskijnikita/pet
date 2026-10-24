import { SupabaseClient } from "@supabase/supabase-js";
import CartStorage from "./CartStorage";
import { Database } from "../../../shared/model/database.types";
import { SupabaseUserId } from "../../user/storage/model/SupabaseUser";
import SetSupabaseProductQuantityParam from "./model/param/SetSupabaseProductQuantityParam";
import SupabaseCart, { SupabaseCartId, SupabaseCartLength } from "./model/SupabaseCart";
import SupabaseCartHistory from "./model/SupabaseCartHistory";

export default class SupabaseCartStorage implements CartStorage {

    constructor(
        
        private supabaseClient: SupabaseClient<Database>
    ) {}

    async setProductQuantity(param: SetSupabaseProductQuantityParam): Promise<SupabaseCartLength> {
        
        const {data} = await this.supabaseClient.rpc("set_progress_cart_product_quantity", {

            p_cart_id: param.cartId,
            p_product_id: param.productId,
            p_quantity: param.quantity,
        })

        return data![0].cart_length
    }

    async getProgressCart(id: SupabaseUserId): Promise<SupabaseCart> {
        
        const {data} = await this.supabaseClient.rpc("get_user_progress_cart", {

            u_id: id
        })

        return data![0] as unknown as SupabaseCart
    }

    async makeOrder(id: SupabaseCartId): Promise<SupabaseCart> {
        
        const {data} = await this.supabaseClient.rpc("make_user_order", {

            p_cart_id: id
        })

        return data![0] as unknown as SupabaseCart
    }

    async getHistory(id: SupabaseUserId): Promise<SupabaseCartHistory> {
        
        const {data} = await this.supabaseClient.rpc("get_history_list", {

            u_id: id
        })

        return data as SupabaseCartHistory ?? []
    }
}