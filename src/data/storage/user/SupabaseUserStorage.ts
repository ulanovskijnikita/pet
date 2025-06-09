import { SupabaseClient } from "@supabase/supabase-js";
import SupabaseUser, { SupabaseUserEmail, SupabaseUserId, SupabaseUserStatus } from "../model/user/SupabaseUser";
import SupabaseUserSignInResponse from "../model/user/SupabaseUserSignInResponse";
import UserStorage from "./UserStorage";
import { SupabaseProductIsFavorites } from "../model/product/SupabaseProduct";
import SupabaseToggleUserFavouriteParam from "../model/user/SupabaseToggleUserFafouriteParam";
import SupabaseValidateUserParam from "../model/user/SupabaseValidateUserParam";
import SupabaseValidateUserRes from "../model/user/SupabaseValidateUserRes";
import { Database } from "../model/supabase/database.types";
import SupabaseUserCartPreview, { SupabaseUserCartLength } from "../model/user/SupabaseUserCartPreview";
import SupabaseRegisterUserParam from "../model/user/SupabaseRegisterUserParam";
import AddToSupabaseUserCartParam from "../model/user/AddToUserCartParam";
import SendSupabaseMessageParam from "../model/user/SendSupabaseMessageParam";
import SupabaseUserCart from "../model/user/SupabaseUserCart";
import QuantitySupabaseProductRes from "../model/user/QuantitySupabaseProductRes";
import SupabaseUserHistory from "../model/user/SupabaseUserHistory";

export default class SupabaseUserStorage implements UserStorage {

    constructor(
    
        private readonly supabaseClient: SupabaseClient<Database>
    ) {}

    async getHistoryList(id: SupabaseUserId): Promise<SupabaseUserHistory[]> {
        
        const {data} = await this.supabaseClient.rpc("get_history_list", {

            u_id: id
        })

        return data as SupabaseUserHistory[] ?? []
    }

    async getAnOrder(id: SupabaseUserId): Promise<SupabaseUserCartPreview> {
        
        const {data} = await this.supabaseClient.rpc("get_an_order", {

            u_id: id
        })

        return data![0]
    }

    async changeQuantityCartSupabaseProduct(param: AddToSupabaseUserCartParam): Promise<QuantitySupabaseProductRes> {
        
        const {data} = await this.supabaseClient.rpc("change_quantity_cart_product", {

            p_id: param.productId,
            q: param.quantity,
            u_id: param.userId
        })

        return data![0]
    }

    async setQuantityCartSupabaseProduct(param: AddToSupabaseUserCartParam): Promise<QuantitySupabaseProductRes> {
        
        const {data} = await this.supabaseClient.rpc("set_quantity_cart_product", {

            p_id: param.productId,
            q: param.quantity,
            u_id: param.userId
        })

        return data![0]
    }

    async getCart(id: SupabaseUserId): Promise<SupabaseUserCart[]> {
        
        const {data} = await this.supabaseClient.rpc("get_user_cart", {

            u_id: id
        })

        return data ?? []
    }

    async sendMessage(param: SendSupabaseMessageParam): Promise<SupabaseUserStatus> {
        
        const {data} = await this.supabaseClient.rpc("send_user_message", {

            u_id: param.id,
            u_message: param.message
        })

        return data![0].user_status
    }

    async addToCart(param: AddToSupabaseUserCartParam): Promise<SupabaseUserCartLength> {
        
        const {data} = await this.supabaseClient.rpc("add_to_user_cart", {

            p_id: param.productId,
            q: param.quantity,
            u_id: param.userId
        })

        return data![0].cart_length
    }

    async register(param: SupabaseRegisterUserParam): Promise<void> {
        
        await this.supabaseClient.rpc("register_user", {

            u_email: param.email,
            u_name: param.name,
            u_pass: param.pass
        })
    }

    async validateUser(param: SupabaseValidateUserParam): Promise<SupabaseValidateUserRes> {

        const {data} = await this.supabaseClient.rpc("validate_user", {
            u_email: param.email
        })
        
        return data![0]
    }

    async toggleFavourite(param: SupabaseToggleUserFavouriteParam): Promise<SupabaseProductIsFavorites> {
        
        const {data} = await this.supabaseClient.rpc("toggle_user_favourite", {
            u_id: param.userId,
            p_id: param.productId,
        })
        
        return data!
    }

    async getById(id: SupabaseUserId): Promise<SupabaseUser> {
        
        const {data} = await this.supabaseClient.rpc("get_user_by_id", {
            u_id: id
        })
        
        return data![0]
    }

    async getSignInResponse(userEmail: SupabaseUserEmail): Promise<SupabaseUserSignInResponse> {

        const {data} = await this.supabaseClient.rpc("get_sign_in_response", {
            u_email: userEmail,
        })
        
        return (data?.length) ? data[0] : null
    }
}