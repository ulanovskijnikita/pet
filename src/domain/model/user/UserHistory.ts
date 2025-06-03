import { ProductId, ProductTag } from "../product/Product";
import { ProductQuantity } from "./AddToUserCartParam";
import { UserCartId } from "./UserCartPreview";

export type UserCartStatus = "progress" | "pending" | "completion"

export type UserCartPrice = number

export type CartProduct = {

    id: ProductId
    tag: ProductTag
    q: ProductQuantity
}

export default interface UserHistory {

    id: UserCartId
    status: UserCartStatus
    price: UserCartPrice
    productList: CartProduct[]
}