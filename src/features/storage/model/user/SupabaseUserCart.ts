import SupabaseProduct from "../../../product/model/SupabaseProduct"

export type SupabaseUserCartQuantity = number

export default interface SupabaseUserCart extends SupabaseProduct {

    quantity: SupabaseUserCartQuantity
}