import { UserId } from "../../user/model/User";
import Cart, { CartId, CartLength } from "../model/Cart";
import CartHistory from "../model/CartHistory";
import SetProductQuantityParam from "../model/param/SetProductQuantityParam";

export default interface CartRepository {

    getProgressCart(id: UserId): Promise<Cart>

    makeOrder(id: CartId): Promise<Cart>

    getHistory(id: UserId): Promise<CartHistory>

    setProductQuantity(param: SetProductQuantityParam): Promise<CartLength>
}