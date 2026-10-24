import CartCashe from "./CartCashe";
import PREFIX_CASHE_CART_KEY from "./const/prefixCasheCartKey";
import CasheCart from "./model/CasheCart";
import CasheUserId from "./model/CasheUserId";

export default class SessionCartCashe implements CartCashe {

    setProgressCart(id: CasheUserId, cart: CasheCart): void {

        const key = PREFIX_CASHE_CART_KEY + id

        const value = JSON.stringify( cart )
        
        sessionStorage.setItem(key, value)
    }

    getProgressCart(id: CasheUserId): CasheCart {
        
        const key = PREFIX_CASHE_CART_KEY + id

        const casheCart = JSON.parse( sessionStorage.getItem( key ) ?? '' )

        return casheCart
    }
}