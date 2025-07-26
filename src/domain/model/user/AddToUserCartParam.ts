import { ProductId } from "../product/Product";
import { UserId } from "./User";

export type ProductQuantity = number

export default interface AddToUserCartParam {

    userId: UserId | null
    productId: ProductId
    quantity: ProductQuantity
}

export const DEFAULT_QUANTITY = 1