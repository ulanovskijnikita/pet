import { CasheUserId } from "../../../shared/model/cashe/CasheUser";
import CartCashe from "../../../shared/cashe/CartCashe";
import PREFIX_CASHE_CART_KEY from "./const/prefixCasheCartKey";
import CasheCart from "./model/CasheCart";
import GetCasheProgressCartRes from "./model/res/GetCasheProgressCartRes";

export default class SessionCartCashe implements CartCashe {

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