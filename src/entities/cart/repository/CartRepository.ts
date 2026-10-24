import { UserId } from "../../../shared/model/entities/User";
import Cart, { CartId, CartLength } from "../../../shared/model/entities/Cart";
import CartHistory from "../model/CartHistory";
import SetProductQuantityParam from "../model/param/SetProductQuantityParam";

export default interface CartRepository {

    getProgressCart(id: UserId): Promise<Cart>

    makeOrder(id: CartId): Promise<Cart>

    getHistory(id: UserId): Promise<CartHistory>

    setProductQuantity(param: SetProductQuantityParam): Promise<CartLength>
}