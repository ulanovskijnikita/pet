import { ICart } from "../model/ICart";
import { ProductId } from "../model/IProduct";
import { UserId } from "../model/IUser";

export interface CartRepository {

    getByUserId(userId: UserId): ICart

    setProductInCartByProductId(productId: ProductId): boolean
    
    removeProductInCartByProductId(productId: ProductId): boolean
}