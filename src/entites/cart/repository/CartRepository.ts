import { UserId } from "../../user/model/User";
import Cart, { CartId } from "../model/Cart";
import CartPreview, { CartLength } from "../model/CartPreview";
import CartsHistory from "../model/CartsHistory";
import AddToProgressCartUseCaseParam from "../model/param/AddToProgressCartUseCaseParam";
import GetCartLengthUseCaseRes from "../model/res/GetCartLengthUseCaseRes";

export default interface CartRepository {

    setCartLength(id: CartId): Promise<GetCartLengthUseCaseRes>

    getCart(id: UserId): Promise<Cart>

    getAnOrder(id: UserId): Promise<CartPreview>

    getHistoryList(id: UserId): Promise<CartsHistory>

    addToCart(param: AddToProgressCartUseCaseParam): Promise<CartLength>
}