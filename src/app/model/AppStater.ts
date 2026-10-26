import { CartPrice, CartProductQuantity } from "../../shared/model/entities/Cart";
import Product, { ProductId, ProductIsFavorites } from "../../shared/model/entities/Product";
import { UserId } from "../../shared/model/entities/User";
import AppCart from "./AppCart";

export default interface AppStater {

    get getUserId(): UserId | null

    get getCart(): AppCart | null

    setProfile(): void

    setFavoutiteCartProduct(id: ProductId, isFavourites: ProductIsFavorites): void

    setProductQuantity(product: Product, q: CartProductQuantity, price: CartPrice): void

    setCart(cart: AppCart): void

    signOut(): void
}