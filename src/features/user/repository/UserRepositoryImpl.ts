import UserRepository from "../../../entities/user/repository/UserRepository.ts";
import User, { UserEmail, UserId, UserRateMessage, UserStatus } from "../../../shared/model/entities/User.ts";
import AuthenticationUserParam from "../../../entities/user/model/param/AuthenticationUserParam.ts";
import AuthenticationUserRes from "../../../entities/user/model/res/AuthenticationUserRes.ts";
import AuthorizationUserRes from "../../../entities/user/model/res/AuthorizationUserRes.ts";
import GetUserUseCaseRes from "../../../entities/user/model/res/GetUserUseCaseRes.ts";
import IdentityUserRes from "../../../entities/user/model/res/IdentityUserRes.ts";
import RegisterUserUseCaseParam from "../../../entities/user/model/param/RegisterUserUseCaseParam.ts";
import ToggleFavouriteProductParam from "../../../entities/user/model/param/ToggleUserFafouriteParam.ts";
import ValidateUserParam from "../../../entities/user/model/param/ValidateUserParam.ts";
import ValidateUserRes from "../../../entities/user/model/res/ValidateUserRes.ts";
import { ProductIsFavorites } from "../../../shared/model/entities/Product.ts";
import CasheUser from "../../../shared/model/cashe/CasheUser.ts";
import StorageUser from "../../../shared/model/storage/StorageUser.ts";
import UserCashe from "../cashe/UserCashe.ts";
import UserStorage from "../storage/UserStorage.ts";
import CartCashe from "../../../shared/cashe/CartCashe.ts";

export default class UserRepositoryImpl implements UserRepository {

    constructor(

        private userStorage: UserStorage,
        private userCashe: UserCashe,
        private cartCashe: CartCashe,
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

        this.userCashe.setUser( this.mapStorageUserToCasheUser( supabaseUser ) )

        return this.mapStorageUserToUser( supabaseUser )
    }

    get(): GetUserUseCaseRes {

        const casheUser = this.userCashe.getUser()

        return casheUser ? this.mapCasheUserToUser( casheUser ) : null
    }

    async toggleFavouriteProduct(param: ToggleFavouriteProductParam): Promise<ProductIsFavorites> {

        return this.userStorage.toggleFavouriteStorageProduct( param )
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

    private mapStorageUserToCasheUser(supabaseUser: StorageUser): CasheUser {

        return {

            email: supabaseUser.email,
            id: supabaseUser.id.toString(),
            name: supabaseUser.name,
            status: supabaseUser.status,
        }
    }

    private mapStorageUserToUser(supabaseUser: StorageUser): User {

        return {
            email: supabaseUser.email,
            id: supabaseUser.id,
            name: supabaseUser.name,
            status: supabaseUser.status,
        }
    }

    private mapCasheUserToUser(casheUser: CasheUser): User {

        return {
            email: casheUser.email,
            id: Number(casheUser.id),
            name: casheUser.name,
            status: casheUser.status,
        }
    }
}
