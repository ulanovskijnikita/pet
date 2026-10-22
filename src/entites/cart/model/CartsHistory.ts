import { ProductId, ProductQuantity, ProductTag } from "../../product/model/Product";
import { CartId } from "./CartPreview";

export type CartStatus = "progress" | "pending" | "completion"

export type CartPrice = number

export type CartProduct = {

    id: ProductId
    tag: ProductTag
    q: ProductQuantity
}

type CartsHistory = {

    id: CartId
    status: CartStatus
    price: CartPrice
    productList: CartProduct[]
}[]

export default CartsHistory