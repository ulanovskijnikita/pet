import { SupabaseClient } from "@supabase/supabase-js";
import SupabaseUser, { SupabaseUserEmail, SupabaseUserId } from "../model/user/SupabaseUser";
import SupabaseUserSignInResponse from "../model/user/SupabaseUserSignInResponse";
import UserStorage from "./UserStorage";
import { SupabaseProductIsFavorites } from "../model/product/SupabaseProduct";
import SupabaseToggleUserFavouriteParam from "../model/user/SupabaseToggleUserFafouriteParam";
import SupabaseValidateUserParam from "../model/user/SupabaseValidateUserParam";
import SupabaseValidateUserRes from "../model/user/SupabaseValidateUserRes";
import { Database } from "../../../infrastructure/supabase/database.types";
import { SupabaseUserCartLength } from "../model/user/UserCart";
import SupabaseRegisterUserParam from "../model/user/SupabaseRegisterUserParam";
import AddToSupabaseUserCartParam from "../model/user/AddToUserCartParam";

export default class SupabaseUserStorage implements UserStorage {

    constructor(
    
        private readonly supabaseClient: SupabaseClient<Database>
    ) {}

    async addToCart(param: AddToSupabaseUserCartParam): Promise<void> {
        
        await this.supabaseClient.rpc("add_to_user_cart", {
            p_id: param.productId,
            q: param.quantity,
            u_id: param.userId
        })
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

    async getCartLength(id: SupabaseUserId): Promise<SupabaseUserCartLength> {
        
        const {data} = await this.supabaseClient.rpc("get_user_cart_length", {
            u_id: id
        })
        
        return data!
    }

    async toggleFavourite(param: SupabaseToggleUserFavouriteParam): Promise<SupabaseProductIsFavorites> {
        
        const {data} : { data: SupabaseProductIsFavorites | null } = await this.supabaseClient.rpc("toggle_user_favourite", {
            u_id: param.userId,
            p_id: param.productId,
        })
        
        return data!
    }

    async getById(id: SupabaseUserId): Promise<SupabaseUser> {
        
        const {data} : { data: SupabaseUser[] | null } = await this.supabaseClient.rpc("get_user_by_id", {
            u_id: id
        })
        
        return data![0]
    }

    async getSignInResponse(userEmail: SupabaseUserEmail): Promise<SupabaseUserSignInResponse> {

        const {data} : { data: SupabaseUserSignInResponse[] | null } = await this.supabaseClient.rpc("get_sign_in_response", {
            u_email: userEmail,
        })
        
        return (data?.length) ? data[0] : null
    }
}