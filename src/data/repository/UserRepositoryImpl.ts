import { ProductIsFavorites } from "../../domain/model/product/Product";
import AddToUserCartParam from "../../domain/model/user/AddToUserCartParam";
import AuthenticationUserParam from "../../domain/model/user/AuthenticationUserParam";
import QuantityProductRes from "../../domain/model/user/QuantityProductRes";
import RegisterUserParam from "../../domain/model/user/RegisterUserParam";
import SendMessageParam from "../../domain/model/user/SendMessageParam";
import ToggleUserFavouriteParam from "../../domain/model/user/ToggleUserFafouriteParam";
import User, { UserEmail, UserId, UserStatus } from "../../domain/model/user/User";
import UserCart from "../../domain/model/user/UserCart";
import UserCartPreview, { UserCartLength } from "../../domain/model/user/UserCartPreview";
import UserHistory, { CartProduct } from "../../domain/model/user/UserHistory";
import ValidateUserParam from "../../domain/model/user/ValidateUserParam";
import ValidateUserRes from "../../domain/model/user/ValidateUserRes";
import UserRepository from "../../domain/repository/UserRepository";
import SessionUser, { SessionUserCartLength } from "../storage/model/user/SessionUser";
import SessionUserCartPreview from "../storage/model/user/SessionUserCartPreview";
import SupabaseUser from "../storage/model/user/SupabaseUser";
import SupabaseUserCart from "../storage/model/user/SupabaseUserCart";
import SupabaseUserCartPreview, { SupabaseUserCartLength } from "../storage/model/user/SupabaseUserCartPreview";
import SupabaseUserHistory from "../storage/model/user/SupabaseUserHistory";
import SupabaseValidateUserRes from "../storage/model/user/SupabaseValidateUserRes";
import UserCashe from "../storage/user/UserCashe";
import UserStorage from "../storage/user/UserStorage";

export default class UserRepositoryImpl implements UserRepository {

    constructor (

        private userStorage: UserStorage,
        private userCashe: UserCashe,
    ) {}

    async identityUser(email: UserEmail): Promise<UserId | null> {
        
        return this.userStorage.identityUser(email)
    }

    async authenticationUser(param: AuthenticationUserParam): Promise<UserId | null> {
        
        return this.userStorage.authenticationUser(param)
    }

    async authorizationUser(id: UserId): Promise<User | null> {
        
        const supabaseUser = await this.userStorage.authorizationUser(id)

        if (!supabaseUser) return null

        this.userCashe.setCartPreview( this.mapSupabaseUserCartPreviewToSessionUserCartPreview(supabaseUser) )
        this.userCashe.setUser( this.mapSupabaseUserToSessionUser(supabaseUser) )

        return this.mapSupabaseUserToUser( supabaseUser )
    }

    async getHistoryList(id: UserId): Promise<UserHistory[]> {
        
        const supabaseUserHistory = await this.userStorage.getHistoryList(id)

        return this.mapSupabaseUserHistoryToUserHistory(supabaseUserHistory)
    }

    async getAnOrder(id: UserId | null): Promise<UserCartPreview> {

        const cartPreview = await this.userStorage.getAnOrder(id)

        this.userCashe.setCartPreview( this.mapSupabaseUserCartPreviewToSessionUserCartPreview(cartPreview) )
        
        return this.mapSupabaseUserCartPreviewToUserCartPreview( cartPreview )
    }

    async changeQuantityCartProduct(param: AddToUserCartParam): Promise<QuantityProductRes> {
        
        const res = await this.userStorage.changeQuantityCartSupabaseProduct(param)

        this.userCashe.addToCart( this.mapSupabaseUserCartLengthToSessionUserCartlength(res.length) )

        return res
    }

    async setQuantityCartProduct(param: AddToUserCartParam): Promise<QuantityProductRes> {

        const res = await this.userStorage.setQuantityCartSupabaseProduct(param)

        this.userCashe.addToCart( this.mapSupabaseUserCartLengthToSessionUserCartlength(res.length) )

        return res
    }

    async getCart(id: UserId | null): Promise<UserCart[]> {
        
        return this.mapSupabaseUserCartToUserCart( await this.userStorage.getCart(id) )
    }

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

    get(): (User & UserCartPreview) | null {

        const sessionUser = this.userCashe.getUser()

        if(sessionUser) return this.mapSessionUserToUser(sessionUser)

        return null
    }

    private mapSupabaseUserCartPreviewToSessionUserCartPreview(supabaseUserCartPreview: SupabaseUserCartPreview): SessionUserCartPreview {

        return {

            id: supabaseUserCartPreview.cart_id.toString(),
            length: supabaseUserCartPreview.cart_length.toString(),
        }
    }

    private mapSupabaseUserCartPreviewToUserCartPreview(supabaseUserCartPreview: SupabaseUserCartPreview): UserCartPreview {

        return {

            cartId: supabaseUserCartPreview.cart_id,
            cartLength: supabaseUserCartPreview.cart_length,
        }
    }

    private mapSupabaseUserHistoryToUserHistory(supabaseUserHistory: SupabaseUserHistory[]): UserHistory[] {

        return supabaseUserHistory.map(

            value => {

                return {

                    id: value.cart_id,
                    price: value.cart_price,
                    status: value.cart_status,
                    productList: value.cart_products.map<CartProduct>(
                        (product) => {

                            return {
                                
                                id: product.product_id,
                                q: product.product_quantity,
                                tag: product.product_tag
                            }
                        }
                    )
                }
            }
        )
    }

    private mapSupabaseUserCartToUserCart(supabaseUserCart: SupabaseUserCart[]): UserCart[] {

        return supabaseUserCart.map(

            value => {

                return {

                    id: value.id,
                    img: value.img,
                    isFavorites: value.is_favorites,
                    priceCount: value.price_count,
                    priceCurrency: value.price_currency,
                    quantity: value.quantity,
                    rating: value.rating,
                    statuses: value.statuses,
                    tag: value.tag
                }
            }
        )
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

    private mapSupabaseUserCartLengthToSessionUserCartlength(supabaseUserCartLength: SupabaseUserCartLength): SessionUserCartLength {

        return supabaseUserCartLength.toString()
    }
}