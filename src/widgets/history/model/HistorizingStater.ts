import Cart from "../../../shared/model/entities/Cart";

export default interface HistorizingStater {

    addCart(cart: Cart): void
}