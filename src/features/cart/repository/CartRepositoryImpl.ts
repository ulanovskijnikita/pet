import Cart from "../../../shared/model/entities/Cart";
import CartHistory from "../../../entities/cart/model/CartHistory";
import SetProductQuantityParam from "../../../entities/cart/model/param/SetProductQuantityParam";
import CartRepository from "../../../entities/cart/repository/CartRepository";
import { UserId } from "../../../shared/model/entities/User";
import CartCashe from "../../../shared/cashe/CartCashe";
import CasheCart from "../../../shared/cashe/model/CasheCart";
import CartStorage from "../storage/CartStorage";
import StorageCart from "../../../shared/model/storage/StorageCart";
import StorageCartHistory from "../storage/model/StorageCartHistory";
import SetProductQuantityRes from "../../../entities/cart/model/res/SetProductQuantityRes";

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

        this.cartCashe.setProgressCart(casheCartId, this.mapStorageCartToCasheCart( supabaseCart ))

        return this.mapStorageCartToCart( supabaseCart )
    }

    async makeOrder(id: UserId, cart: Cart): Promise<Cart> {

        const supabaseCart = await this.cartStorage.makeOrder( cart.id )

        this.cartCashe.setProgressCart(id.toString(), this.mapStorageCartToCasheCart( supabaseCart ))

        return this.mapStorageCartToCart( supabaseCart )
    }

    async getHistory(id: UserId): Promise<CartHistory> {
        
        const supabaseCartHistory = await this.cartStorage.getHistory( id )

        return this.mapStorageCartHistoryToCartHistory( supabaseCartHistory )
    }

    async setProductQuantity(param: SetProductQuantityParam): Promise<SetProductQuantityRes> {
        
        const res = await this.cartStorage.setProductQuantity( param )

        this.cartCashe.setProductQuantity(res.user_id.toString(), res.product, res.quantity, res.cart_total_price, res.cart_length)

        return {

            currentQuantity: res.quantity,
            length: res.cart_length,
            price: res.cart_total_price,
            product: {
                
                ...res.product,
                isFavorites: res.product.is_favorites,
                priceCount: res.product.price_count,
                priceCurrency: res.product.price_currency,
            },
        }
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

    private mapStorageCartHistoryToCartHistory(supabaseCartHistory: StorageCartHistory): CartHistory {

        return supabaseCartHistory.map(supabaseCartHistoryItem =>

            ({

                id: supabaseCartHistoryItem.cart_id,
                price: supabaseCartHistoryItem.cart_price,
                products: supabaseCartHistoryItem.cart_products.map(product => ({

                    product: {

                        tag: product.tag,
                        id: product.id
                    },
                    q: product.q
                })),
                status: supabaseCartHistoryItem.cart_status
            })
        )
    }

    private mapStorageCartToCasheCart(supabaseCart: StorageCart): CasheCart {

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

    private mapStorageCartToCart(supabaseCart: StorageCart): Cart {

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