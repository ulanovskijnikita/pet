import { CasheUserId } from "../model/cashe/CasheUser";
import CasheCart, { CasheCartLength, CasheCartPrice, CasheCartProductQuantity } from "./model/CasheCart";
import GetCasheProgressCartRes from "./model/res/GetCasheProgressCartRes";
import ToggleFavouriteProductCartParam from "./model/param/ToggleFavouriteProductCartParam";
import CasheProduct from "./model/CasheProduct";

export default interface CartCashe {

    getProgressCart(id: CasheUserId): GetCasheProgressCartRes

    setProgressCart(id: CasheUserId, cart: CasheCart): void

    toggleFavouriteProductCart(param: ToggleFavouriteProductCartParam): void

    setProductQuantity(id: CasheUserId, product: CasheProduct, q: CasheCartProductQuantity, price: CasheCartPrice, length: CasheCartLength): void
}