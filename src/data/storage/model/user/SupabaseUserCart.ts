import SupabaseProduct from "../product/SupabaseProduct"

export type SupabaseUserCartQuantity = number

export default interface SupabaseUserCart extends SupabaseProduct {

    quantity: SupabaseUserCartQuantity
}