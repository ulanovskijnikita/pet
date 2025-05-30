export type SupabaseUserActiveCartId = number
export type SupabaseUserCartLength = number

export default interface SupabaseUserCartPreview {

    cart_id: SupabaseUserActiveCartId
    cart_length: SupabaseUserCartLength
}