import { CasheUserId } from "../../../shared/model/cashe/CasheUser";
import CartCashe from "../../../shared/cashe/CartCashe";
import PREFIX_CASHE_CART_KEY from "./const/prefixCasheCartKey";
import CasheCart, { CasheCartLength, CasheCartPrice, CasheCartProductQuantity } from "../../../shared/cashe/model/CasheCart";
import GetCasheProgressCartRes from "../../../shared/cashe/model/res/GetCasheProgressCartRes";
import ToggleFavouriteProductCartParam from "../../../shared/cashe/model/param/ToggleFavouriteProductCartParam";
import CasheProduct from "../../../shared/cashe/model/CasheProduct";

export default class SessionCartCashe implements CartCashe {

    setProductQuantity(id: CasheUserId, product: CasheProduct, q: CasheCartProductQuantity, price: CasheCartPrice, length: CasheCartLength): void {

        const key = PREFIX_CASHE_CART_KEY + id
        
        const sessionCart: CasheCart = JSON.parse( sessionStorage.getItem( key )! )

        const productIndex = sessionCart.products.findIndex(({product: prod}) => prod.id == product.id)

        if (productIndex === -1) {

            sessionCart.products.push({

                product: product,
                q: q,
            })
        } else {

            sessionCart.products[ productIndex ].q = q
        }

        sessionCart.cartLength = length

        sessionCart.price = price

        const value = JSON.stringify( sessionCart )
            
        sessionStorage.setItem(key, value)
    }

    toggleFavouriteProductCart(param: ToggleFavouriteProductCartParam): void {

        const key = PREFIX_CASHE_CART_KEY + param.userId
        
        const sessionCart: CasheCart = JSON.parse( sessionStorage.getItem( key )! )

        const productIndex = sessionCart.products.findIndex(({product}) => product.id == param.productId)

        if( productIndex !== -1 ) {

            sessionCart.products[ productIndex ].product.is_favorites = param.isFavourite

            const value = JSON.stringify( sessionCart )
            
            sessionStorage.setItem(key, value)
        }
    }

    setProgressCart(id: CasheUserId, cart: CasheCart): void {

        const key = PREFIX_CASHE_CART_KEY + id

        const value = JSON.stringify( cart )
        
        sessionStorage.setItem(key, value)
    }

    getProgressCart(id: CasheUserId): GetCasheProgressCartRes {
        
        const key = PREFIX_CASHE_CART_KEY + id

        const sessionRes = sessionStorage.getItem( key )

        if ( sessionRes ) return JSON.parse( sessionRes )

        return null
    }
}