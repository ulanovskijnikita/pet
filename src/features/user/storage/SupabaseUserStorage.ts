import { SupabaseClient } from "@supabase/supabase-js"
import { Database } from "../../../shared/model/database.types"
import { StorageProductIsFavorites } from "../../product/storage/model/StorageProduct"
import AuthenticationStorageUserParam from "./model/param/AuthenticationStorageUserParam"
import RegisterStorageUserParam from "./model/param/RegisterStorageUserParam"
import ToggleFavouriteStorageProduct from "./model/param/ToggleFavouriteStorageProduct"
import ValidateStorageUserParam from "./model/param/ValidateStorageUserParam"
import ValidateStorageUserRes from "./model/res/ValidateStorageUserRes"
import { StorageUserId, StorageUserEmail, StorageUserStatus, StorageUserRateMessage } from "./model/StorageUser"
import UserStorage from "./UserStorage"
import AuthenticationStorageUserRes from "./model/res/AuthenticationStorageUserRes"
import AuthorizationStorageUserRes from "./model/res/AuthorizationStorageUserRes"
import IdentityStorageUserRes from "./model/res/IdentityStorageUserRes"

export default class SupabaseUserStorage implements UserStorage {

    constructor(
    
        private supabaseClient: SupabaseClient<Database>
    ) {}
    
    async validate(param: ValidateStorageUserParam): Promise<ValidateStorageUserRes> {

        const { data } = await this.supabaseClient.rpc("validate_user", {

            u_email: param.email
        })
        
        return data![0].email_res
    }

    async identity(email: StorageUserEmail): Promise<IdentityStorageUserRes> {
        
        const {data} = await this.supabaseClient.rpc("identity_user", {

            u_email: email
        })

        if (!data || !data.length) return null

        return data[0].user_id ?? null
    }

    async authentication(param: AuthenticationStorageUserParam): Promise<AuthenticationStorageUserRes> {
        
        const {data} = await this.supabaseClient.rpc("authentication_user", {

            u_email: param.email,
            u_pass: param.pass
        })

        if (!data || !data.length) return null

        return data[0].u_id ?? null
    }

    async authorization(id: StorageUserId): Promise<AuthorizationStorageUserRes> {
        
        const {data} = await this.supabaseClient.rpc("authorization_user", {

            u_id: id
        })

        if (!data) return null

        return data[0] ?? null
    }
    async toggleFavouriteStorageProduct(param: ToggleFavouriteStorageProduct): Promise<StorageProductIsFavorites> {
        
        const {data} = await this.supabaseClient.rpc("toggle_user_favourite", {
            u_id: param.userId,
            p_id: param.productId,
        })
        
        return data!
    }
    async register(param: RegisterStorageUserParam): Promise<void> {
        
        await this.supabaseClient.rpc("register_user", {

            u_email: param.email,
            u_name: param.name,
            u_pass: param.pass
        })
    }
    async setRateMessage(id: StorageUserId, message: StorageUserRateMessage): Promise<StorageUserStatus> {
        
        const {data} = await this.supabaseClient.rpc("send_user_message", {

            u_id: id,
            u_message: message
        })

        return data![0].user_status
    }
}