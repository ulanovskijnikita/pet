import UserRepository from "../../../entities/user/repository/UserRepository.ts";
import User, { UserEmail, UserId, UserRateMessage, UserStatus } from "../../../entities/user/model/User.ts";
import AuthenticationUserParam from "../../../entities/user/model/param/AuthenticationUserParam.ts";
import AuthenticationUserRes from "../../../entities/user/model/res/AuthenticationUserRes.ts";
import AuthorizationUserRes from "../../../entities/user/model/res/AuthorizationUserRes.ts";
import GetUserUseCaseRes from "../../../entities/user/model/res/GetUserUseCaseRes.ts";
import IdentityUserRes from "../../../entities/user/model/res/IdentityUserRes.ts";
import RegisterUserUseCaseParam from "../../../entities/user/model/param/RegisterUserUseCaseParam.ts";
import ToggleFavouriteProductParam from "../../../entities/user/model/param/ToggleUserFafouriteParam.ts";
import ValidateUserParam from "../../../entities/user/model/param/ValidateUserParam.ts";
import ValidateUserRes from "../../../entities/user/model/res/ValidateUserRes.ts";
import { ProductIsFavorites } from "../../../entities/product/model/Product.ts";
import SessionUser from "../cashe/model/SessionUser.ts";
import SupabaseUser from "../storage/model/SupabaseUser.ts";
import UserCashe from "../cashe/UserCashe.ts";
import UserStorage from "../storage/UserStorage.ts";

export default class UserRepositoryImpl implements UserRepository {

    constructor(

        private userStorage: UserStorage,
        private userCashe: UserCashe,
    ) {}

    async identity(email: UserEmail): Promise<IdentityUserRes> {

        return this.userStorage.identity( email )
    }

    async authentication(param: AuthenticationUserParam): Promise<AuthenticationUserRes> {

        return this.userStorage.authentication( param )
    }

    async authorization(id: UserId): Promise<AuthorizationUserRes> {

        const supabaseUser = await this.userStorage.authorization( id )

        if (!supabaseUser) return null

        this.userCashe.setUser( this.mapSupabaseUserToSessionUser( supabaseUser ) )

        return this.mapSupabaseUserToUser( supabaseUser )
    }

    get(): GetUserUseCaseRes {

        const sessionUser = this.userCashe.getUser()

        return sessionUser ? this.mapSessionUserToUser( sessionUser ) : null
    }

    async toggleFavouriteProduct(param: ToggleFavouriteProductParam): Promise<ProductIsFavorites> {

        return this.userStorage.toggleFavouriteProduct( param )
    }

    async validate(param: ValidateUserParam): Promise<ValidateUserRes> {

        const response = await this.userStorage.validate( param )

        return { isUnique: response }
    }

    async register(param: RegisterUserUseCaseParam): Promise<void> {

        const { email, name, pass } = param

        await this.userStorage.register({ email, name, pass })
    }

    async setRateMessage(id: UserId, message: UserRateMessage): Promise<UserStatus> {

        const status = await this.userStorage.setRateMessage( id, message )

        this.userCashe.setStatus( status )

        return status
    }

    private mapSupabaseUserToSessionUser(supabaseUser: SupabaseUser): SessionUser {

        return {

            email: supabaseUser.email,
            id: supabaseUser.id.toString(),
            name: supabaseUser.name,
            status: supabaseUser.status,
        }
    }

    private mapSupabaseUserToUser(supabaseUser: SupabaseUser): User {

        return {
            email: supabaseUser.email,
            id: supabaseUser.id,
            name: supabaseUser.name,
            status: supabaseUser.status,
        }
    }

    private mapSessionUserToUser(sessionUser: SessionUser): User {

        return {
            email: sessionUser.email,
            id: Number(sessionUser.id),
            name: sessionUser.name,
            status: sessionUser.status,
        }
    }
}
