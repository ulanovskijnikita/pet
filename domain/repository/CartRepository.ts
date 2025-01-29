import { Cart } from "../model/Cart";
import { ProductId } from "../model/Product";
import { UserId } from "../model/User";

export interface CartRepository {

    getByUserId(userId: UserId): Cart

    setProductInCartByProductId(productId: ProductId): boolean
    
    removeProductInCartByProductId(productId: ProductId): boolean
}