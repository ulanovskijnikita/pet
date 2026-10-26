import { UserId } from "../../../shared/model/entities/User";
import Cart from "../../../shared/model/entities/Cart";
import CartHistory from "../model/CartHistory";
import SetProductQuantityParam from "../model/param/SetProductQuantityParam";
import SetProductQuantityRes from "../model/res/SetProductQuantityRes";

export default interface CartRepository {

    getProgressCart(id: UserId): Promise<Cart>

    makeOrder(id: UserId, cart: Cart): Promise<Cart>

    getHistory(id: UserId): Promise<CartHistory>

    setProductQuantity(param: SetProductQuantityParam): Promise<SetProductQuantityRes>
}