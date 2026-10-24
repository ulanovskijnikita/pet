import { Enums } from "../../../../shared/lib/supabase/database.types"
import CasheProduct from "./CasheProduct"

export type CasheCartId = number
export type CasheCartPrice = number
export type CasheCartLength = number

export type CasheCartStatus = Enums<"cart_status">

export type CasheCartProductQuantity = number

type CasheCart = {

    id: CasheCartId
    products: {

        product: CasheProduct
        q: CasheCartProductQuantity
    }[]
    price: CasheCartPrice
    cartLength: CasheCartLength
    status: CasheCartStatus
}

export default CasheCart