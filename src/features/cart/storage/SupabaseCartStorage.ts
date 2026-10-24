import { SupabaseClient } from "@supabase/supabase-js";
import CartStorage from "./CartStorage";
import { Database } from "../../../shared/lib/supabase/database.types";
import { StorageUserId } from "../../../shared/model/storage/StorageUser";
import SetStorageProductQuantityParam from "./model/param/SetStorageProductQuantityParam";
import StorageCart, { StorageCartId, StorageCartLength } from "../../../shared/model/storage/StorageCart";
import StorageCartHistory from "./model/StorageCartHistory";

export default class SupabaseCartStorage implements CartStorage {

    constructor(
        
        private supabaseClient: SupabaseClient<Database>
    ) {}

    async setProductQuantity(param: SetStorageProductQuantityParam): Promise<StorageCartLength> {
        
        const {data} = await this.supabaseClient.rpc("set_progress_cart_product_quantity", {

            p_cart_id: param.cartId,
            p_product_id: param.productId,
            p_quantity: param.quantity,
        })

        return data![0].cart_length
    }

    async getProgressCart(id: StorageUserId): Promise<StorageCart> {
        
        const {data} = await this.supabaseClient.rpc("get_user_progress_cart", {

            u_id: id
        })

        return data![0] as unknown as StorageCart
    }

    async makeOrder(id: StorageCartId): Promise<StorageCart> {
        
        const {data} = await this.supabaseClient.rpc("make_user_order", {

            p_cart_id: id
        })

        return data![0] as unknown as StorageCart
    }

    async getHistory(id: StorageUserId): Promise<StorageCartHistory> {
        
        const {data} = await this.supabaseClient.rpc("get_history_list", {

            u_id: id
        })

        return data as StorageCartHistory ?? []
    }
}