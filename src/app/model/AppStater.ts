import Cart from "../../shared/model/entities/Cart";
import { ProductId, ProductIsFavorites } from "../../shared/model/entities/Product";
import { UserId } from "../../shared/model/entities/User";

export default interface AppStater {

    get getUserId(): UserId | null

    get getCart(): Cart | null

    setProfile(): void

    setFavoutiteCartProduct(id: ProductId, isFavourites: ProductIsFavorites): void
}