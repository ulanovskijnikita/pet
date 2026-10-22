import { ProductIsFavorites } from "../../entites/product/model/Product";
import AddToProgressCartUseCaseParam from "../../entites/cart/model/param/AddToProgressCartUseCaseParam";
import AuthenticationUserParam from "../../entites/user/AuthenticationUserParam";
import GetCartLengthUseCaseRes from "../../entites/cart/model/res/GetCartLengthUseCaseRes";
import RegisterUserParam from "../../entites/user/RegisterUserParam";
import SendMessageParam from "../../entites/user/model/param/SendMessageParam";
import ToggleFavouriteProductParam from "../../entites/user/model/param/ToggleUserFafouriteParam";
import User, { UserEmail, UserId, UserStatus } from "../../entites/user/model/User";
import Cart from "../../entites/cart/model/Cart";
import CartPreview, { CartLength } from "../../entites/cart/model/CartPreview";
import CartsHistory, { CartProduct } from "../../entites/cart/model/CartsHistory";
import ValidateUserParam from "../../entites/user/model/param/ValidateUserParam";
import ValidateUserRes from "../../entites/user/model/res/ValidateUserRes";
import UserRepository from "../../entites/user/repository/UserRepository";
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

    async identity(email: UserEmail): Promise<UserId | null> {
        
        return this.userStorage.identityUser(email)
    }

    async authentication(param: AuthenticationUserParam): Promise<UserId | null> {
        
        return this.userStorage.authenticationUser(param)
    }

    async authorization(id: UserId): Promise<User | null> {
        
        const supabaseUser = await this.userStorage.authorizationUser(id)

        if (!supabaseUser) return null

        this.userCashe.setCartPreview( this.mapSupabaseUserCartPreviewToSessionUserCartPreview(supabaseUser) )
        this.userCashe.setUser( this.mapSupabaseUserToSessionUser(supabaseUser) )

        return this.mapSupabaseUserToUser( supabaseUser )
    }

    async getHistoryList(id: UserId): Promise<CartsHistory[]> {
        
        const supabaseUserHistory = await this.userStorage.getHistoryList(id)

        return this.mapSupabaseUserHistoryToUserHistory(supabaseUserHistory)
    }

    async getAnOrder(id: UserId | null): Promise<CartPreview> {

        const cartPreview = await this.userStorage.getAnOrder(id)

        this.userCashe.setCartPreview( this.mapSupabaseUserCartPreviewToSessionUserCartPreview(cartPreview) )
        
        return this.mapSupabaseUserCartPreviewToUserCartPreview( cartPreview )
    }

    async changeQuantityCartProduct(param: AddToProgressCartUseCaseParam): Promise<GetCartLengthUseCaseRes> {
        
        const res = await this.userStorage.changeQuantityCartSupabaseProduct(param)

        this.userCashe.addToCart( this.mapSupabaseUserCartLengthToSessionUserCartlength(res.length) )

        return res
    }

    async setQuantityCartProduct(param: AddToProgressCartUseCaseParam): Promise<GetCartLengthUseCaseRes> {

        const res = await this.userStorage.setQuantityCartSupabaseProduct(param)

        this.userCashe.addToCart( this.mapSupabaseUserCartLengthToSessionUserCartlength(res.length) )

        return res
    }

    async getCart(id: UserId | null): Promise<Cart[]> {
        
        return this.mapSupabaseUserCartToUserCart( await this.userStorage.getCart(id) )
    }

    async setRateMessage(param: SendMessageParam): Promise<UserStatus> {
        
        const status = await this.userStorage.sendMessage(param)

        this.userCashe.setStatus(status)

        return status
    }

    async addToCart(param: AddToProgressCartUseCaseParam): Promise<CartLength> {

        const userCartLength = await this.userStorage.addToCart(param)

        this.userCashe.addToCart( userCartLength.toString() )
        
        return userCartLength
    }

    async register(param: RegisterUserParam): Promise<void> {
        
        return this.userStorage.register(param)
    }
    
    async validate(param: ValidateUserParam): Promise<ValidateUserRes> {
        
        return this.mapSupabaseValidateUserResToValidateUserRes( await this.userStorage.validateUser(param) )
    }

    async toggleFavouriteProduct(param: ToggleFavouriteProductParam): Promise<ProductIsFavorites> {
        
        return await this.userStorage.toggleFavourite(param)
    }

    get(): (User & CartPreview) | null {

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

    private mapSupabaseUserCartPreviewToUserCartPreview(supabaseUserCartPreview: SupabaseUserCartPreview): CartPreview {

        return {

            cartId: supabaseUserCartPreview.cart_id,
            cartLength: supabaseUserCartPreview.cart_length,
        }
    }

    private mapSupabaseUserHistoryToUserHistory(supabaseUserHistory: SupabaseUserHistory[]): CartsHistory[] {

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

    private mapSupabaseUserCartToUserCart(supabaseUserCart: SupabaseUserCart[]): Cart[] {

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