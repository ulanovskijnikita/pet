import { Enums } from "../../lib/supabase/database.types"
import StorageProduct from "./StorageProduct"

export type StorageCartId = number
export type StorageCartPrice = number
export type StorageCartLength = number

export type StorageCartStatus = Enums<"cart_status">

export type StorageCartProductQuantity = number

export default interface StorageCart {

    id: StorageCartId
    list: {

        product: StorageProduct
        q: StorageCartProductQuantity
    }[]
    price: StorageCartPrice
    cartLength: StorageCartLength
    status: StorageCartStatus
}