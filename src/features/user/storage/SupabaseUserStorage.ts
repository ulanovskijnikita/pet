import { SupabaseClient } from "@supabase/supabase-js"
import { Database } from "../../../shared/model/database.types"
import { SupabaseProductIsFavorites } from "../../product/storage/model/SupabaseProduct"
import AuthenticationSupabaseUserParam from "./model/param/AuthenticationSupabaseUserParam"
import RegisterSupabaseUserParam from "./model/param/RegisterSupabaseUserParam"
import ToggleFavouriteSupabaseProduct from "./model/param/ToggleFavouriteSupabaseProduct"
import ValidateSupabaseUserParam from "./model/param/ValidateSupabaseUserParam"
import ValidateSupabaseUserRes from "./model/res/ValidateSupabaseUserRes"
import { SupabaseUserId, SupabaseUserEmail, SupabaseUserStatus, SupabaseUserRateMessage } from "./model/SupabaseUser"
import UserStorage from "./UserStorage"
import AuthenticationSupabaseUserRes from "./model/res/AuthenticationSupabaseUserRes"
import AuthorizationSupabaseUserRes from "./model/res/AuthorizationSupabaseUserRes"
import IdentitySupabaseUserRes from "./model/res/IdentitySupabaseUserRes"

export default class SupabaseUserStorage implements UserStorage {

    constructor(
    
        private supabaseClient: SupabaseClient<Database>
    ) {}
    
    async validate(param: ValidateSupabaseUserParam): Promise<ValidateSupabaseUserRes> {

        const { data } = await this.supabaseClient.rpc("validate_user", {

            u_email: param.email
        })
        
        return data![0].email_res
    }

    async identity(email: SupabaseUserEmail): Promise<IdentitySupabaseUserRes> {
        
        const {data} = await this.supabaseClient.rpc("identity_user", {

            u_email: email
        })

        if (!data || !data.length) return null

        return data[0].user_id ?? null
    }

    async authentication(param: AuthenticationSupabaseUserParam): Promise<AuthenticationSupabaseUserRes> {
        
        const {data} = await this.supabaseClient.rpc("authentication_user", {

            u_email: param.email,
            u_pass: param.pass
        })

        if (!data || !data.length) return null

        return data[0].u_id ?? null
    }

    async authorization(id: SupabaseUserId): Promise<AuthorizationSupabaseUserRes> {
        
        const {data} = await this.supabaseClient.rpc("authorization_user", {

            u_id: id
        })

        if (!data) return null

        return data[0] ?? null
    }
    async toggleFavouriteProduct(param: ToggleFavouriteSupabaseProduct): Promise<SupabaseProductIsFavorites> {
        
        const {data} = await this.supabaseClient.rpc("toggle_user_favourite", {
            u_id: param.userId,
            p_id: param.productId,
        })
        
        return data!
    }
    async register(param: RegisterSupabaseUserParam): Promise<void> {
        
        await this.supabaseClient.rpc("register_user", {

            u_email: param.email,
            u_name: param.name,
            u_pass: param.pass
        })
    }
    async setRateMessage(id: SupabaseUserId, message: SupabaseUserRateMessage): Promise<SupabaseUserStatus> {
        
        const {data} = await this.supabaseClient.rpc("send_user_message", {

            u_id: id,
            u_message: message
        })

        return data![0].user_status
    }
}