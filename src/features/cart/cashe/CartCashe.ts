import CasheCart from "./model/CasheCart";
import CasheUserId from "./model/CasheUserId";

export default interface CartCashe {

    getProgressCart(id: CasheUserId): CasheCart

    setProgressCart(id: CasheUserId, cart: CasheCart): void
}