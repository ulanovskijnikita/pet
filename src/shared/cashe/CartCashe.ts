import { CasheUserId } from "../model/cashe/CasheUser";
import CasheCart from "../../features/cart/cashe/model/CasheCart";
import GetCasheProgressCartRes from "../../features/cart/cashe/model/res/GetCasheProgressCartRes";
import ToggleFavouriteProductCartParam from "../../features/cart/cashe/model/param/ToggleFavouriteProductCartParam";

export default interface CartCashe {

    getProgressCart(id: CasheUserId): GetCasheProgressCartRes

    setProgressCart(id: CasheUserId, cart: CasheCart): void

    toggleFavouriteProductCart(param: ToggleFavouriteProductCartParam): void
}