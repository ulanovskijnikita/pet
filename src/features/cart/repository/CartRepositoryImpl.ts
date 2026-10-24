import Cart, { CartId, CartLength } from "../../../entities/cart/model/Cart";
import CartHistory from "../../../entities/cart/model/CartHistory";
import SetProductQuantityParam from "../../../entities/cart/model/param/SetProductQuantityParam";
import CartRepository from "../../../entities/cart/repository/CartRepository";
import { UserId } from "../../../entities/user/model/User";
import CartCashe from "../cashe/CartCashe";
import CasheCart from "../cashe/model/CasheCart";
import CartStorage from "../storage/CartStorage";
import SupabaseCart from "../storage/model/SupabaseCart";
import SupabaseCartHistory from "../storage/model/SupabaseCartHistory";

export default class CartRepositoryImpl implements CartRepository {

    constructor(

        private cartStorage: CartStorage,
        private cartCashe: CartCashe,
    ) {}
    
    async getProgressCart(id: UserId): Promise<Cart> {

        const casheCartId = id.toString()

        const casheCart = this.cartCashe.getProgressCart( casheCartId )

        if ( casheCart ) return this.mapCasheCartToCart( casheCart )
        
        const supabaseCart = await this.cartStorage.getProgressCart( id )

        this.cartCashe.setProgressCart(casheCartId, this.mapSupabaseCartToCasheCart( supabaseCart ))

        return this.mapSupabaseCartToCart( supabaseCart )
    }

    async makeOrder(id: CartId): Promise<Cart> {

        const supabaseCart = await this.cartStorage.makeOrder( id )

        return this.mapSupabaseCartToCart( supabaseCart )
    }

    async getHistory(id: UserId): Promise<CartHistory> {
        
        const supabaseCartHistory = await this.cartStorage.getHistory( id )

        return this.mapSupabaseCartHistoryToCartHistory( supabaseCartHistory )
    }

    async setProductQuantity(param: SetProductQuantityParam): Promise<CartLength> {
        
        return this.cartStorage.setProductQuantity( param )
    }

    private mapCasheCartToCart(casheCart: CasheCart): Cart {

        return {

            id: casheCart.id,
            cartLength: casheCart.cartLength,
            price: casheCart.price,
            products: casheCart.products.map(item => 
                
                ({

                    product: {

                        id: item.product.id,
                        img: item.product.img,
                        isFavorites: item.product.is_favorites,
                        priceCount: item.product.price_count,
                        priceCurrency: item.product.price_currency,
                        rating: item.product.rating,
                        statuses: item.product.statuses,
                        tag: item.product.tag
                    },
                    q: item.q
                })
            ),
            status: casheCart.status,
        }
    }

    private mapSupabaseCartHistoryToCartHistory(supabaseCartHistory: SupabaseCartHistory): CartHistory {

        return supabaseCartHistory.map(supabaseCartHistoryItem =>

            ({

                id: supabaseCartHistoryItem.cart_id,
                price: supabaseCartHistoryItem.cart_price,
                products: supabaseCartHistoryItem.cart_products,
                status: supabaseCartHistoryItem.cart_status
            })
        )
    }

    private mapSupabaseCartToCasheCart(supabaseCart: SupabaseCart): CasheCart {

        return {

            id: supabaseCart.id,
            cartLength: supabaseCart.cartLength,
            price: supabaseCart.price,
            products: supabaseCart.list.map(item => 
                
                ({

                    product: {

                        id: item.product.id,
                        img: item.product.img,
                        rating: item.product.rating,
                        statuses: item.product.statuses,
                        tag: item.product.tag,
                        is_favorites: item.product.is_favorites,
                        price_count: item.product.price_count,
                        price_currency: item.product.price_currency,
                    },
                    q: item.q
                })
            ),
            status: supabaseCart.status,
        }
    }

    private mapSupabaseCartToCart(supabaseCart: SupabaseCart): Cart {

        return {

            id: supabaseCart.id,
            cartLength: supabaseCart.cartLength,
            price: supabaseCart.price,
            products: supabaseCart.list.map(item => 
                
                ({

                    product: {

                        id: item.product.id,
                        img: item.product.img,
                        isFavorites: item.product.is_favorites,
                        priceCount: item.product.price_count,
                        priceCurrency: item.product.price_currency,
                        rating: item.product.rating,
                        statuses: item.product.statuses,
                        tag: item.product.tag
                    },
                    q: item.q
                })
            ),
            status: supabaseCart.status,
        }
    }
}