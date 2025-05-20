import { ProductIsFavorites } from "../../domain/model/product/Product";
import AddToUserCartParam from "../../domain/model/user/AddToUserCartParam";
import RegisterUserParam from "../../domain/model/user/RegisterUserParam";
import SendMessageParam from "../../domain/model/user/SendMessageParam";
import ToggleUserFavouriteParam from "../../domain/model/user/ToggleUserFafouriteParam";
import User, { UserEmail, UserId, UserStatus } from "../../domain/model/user/User";
import { UserCartLength } from "../../domain/model/user/UserCart";
import UserSignInResponse from "../../domain/model/user/UserSignInResponse";
import ValidateUserParam from "../../domain/model/user/ValidateUserParam";
import ValidateUserRes from "../../domain/model/user/ValidateUserRes";
import { UserRepository } from "../../domain/repository/UserRepository";
import SessionUser from "../storage/model/user/SessionUser";
import SupabaseUser from "../storage/model/user/SupabaseUser";
import SupabaseUserSignInResponse from "../storage/model/user/SupabaseUserSignInResponse";
import SupabaseValidateUserRes from "../storage/model/user/SupabaseValidateUserRes";
import UserCashe from "../storage/user/UserCashe";
import UserStorage from "../storage/user/UserStorage";

export default class UserRepositoryImpl implements UserRepository {

    constructor (

        private userStorage: UserStorage,

        private userCashe: UserCashe,
    ) {}

    async sendMessage(param: SendMessageParam): Promise<UserStatus> {
        
        const status = await this.userStorage.sendMessage(param)

        this.userCashe.setStatus(status)

        return status
    }

    async addToCart(param: AddToUserCartParam): Promise<UserCartLength> {

        const userCartLength = await this.userStorage.addToCart(param)

        this.userCashe.addToCart( userCartLength.toString() )
        
        return userCartLength
    }

    async register(param: RegisterUserParam): Promise<void> {
        
        return this.userStorage.register(param)
    }
    
    async validateUser(param: ValidateUserParam): Promise<ValidateUserRes> {
        
        return this.mapSupabaseValidateUserResToValidateUserRes( await this.userStorage.validateUser(param) )
    }

    async toggleFavourite(param: ToggleUserFavouriteParam): Promise<ProductIsFavorites> {
        
        return await this.userStorage.toggleFavourite(param)
    }

    get(): User | null {

        const sessionUser = this.userCashe.getUser()

        if(sessionUser) return this.mapSessionUserToUser(sessionUser)

        return null
    }

    async getUserById(id: UserId): Promise<User> {

        const supabaseUser = await this.userStorage.getById(id)

        if(this.userCashe.getUser() == null || this.userCashe.getUser()?.id != supabaseUser.id.toString()) this.userCashe.setUser( this.mapSupabaseUserToSessionUser(supabaseUser) )

        return this.mapSupabaseUserToUser( supabaseUser )  
    }

    async getSignInResponse(userEmail: UserEmail): Promise<UserSignInResponse> {
        
        const supabaseUserSignInResponse = await this.userStorage.getSignInResponse(userEmail)

        return this.mapToUserSignInResponse(supabaseUserSignInResponse)
    }

    private mapSupabaseValidateUserResToValidateUserRes(supabaseValidateUserRes: SupabaseValidateUserRes): ValidateUserRes {

        return {

            isUnique: supabaseValidateUserRes.email_res
        }
    }

    private mapSupabaseUserToSessionUser(supabaseUser: SupabaseUser): SessionUser {

        return {

            email: supabaseUser.email,
            id: supabaseUser.id.toString(),
            name: supabaseUser.name,
            status: supabaseUser.status,
            cartId: supabaseUser.cart_id.toString(),
            cartLength: supabaseUser.cart_length.toString(),
        }
    }

    private mapSupabaseUserToUser(supabaseUser: SupabaseUser): User {

        return {

            email: supabaseUser.email,
            id: supabaseUser.id,
            name: supabaseUser.name,
            status: supabaseUser.status,
            cartId: supabaseUser.cart_id,
            cartLength: supabaseUser.cart_length,
        }
    }

    private mapSessionUserToUser(sessionUser: SessionUser): User {

        return {

            email: sessionUser.email,
            id: +sessionUser.id,
            name: sessionUser.name,            
            status: sessionUser.status,
            cartId: +sessionUser.cartId,
            cartLength: +sessionUser.cartLength,
        }
    }

    private mapToUserSignInResponse(supabaseUserSignInResponse: SupabaseUserSignInResponse): UserSignInResponse {

        return supabaseUserSignInResponse ? {

            email: supabaseUserSignInResponse.user_email,
            id: supabaseUserSignInResponse.user_id,
            password: supabaseUserSignInResponse.user_password,          
        } : null
    }
}