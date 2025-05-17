export type SupabaseUserActiveCartId = number
export type SupabaseUserCartLength = number

export default interface SupabaseUserCart {

    cart_id: SupabaseUserActiveCartId
    cart_length: SupabaseUserCartLength
}