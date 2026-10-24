import Product from "../../product/model/Product"

export type CartId = number
export type CartPrice = number
export type CartLength = number

export type CartStatus = "progress" | "pending" | "completion"

export type CartProductQuantity = number

export default interface Cart {

    id: CartId
    products: {

        product: Product
        q: CartProductQuantity
    }[]
    price: CartPrice
    cartLength: CartLength
    status: CartStatus
}