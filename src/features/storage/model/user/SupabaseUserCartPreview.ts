export type SupabaseUserCartId = number
export type SupabaseUserCartLength = number

export default interface SupabaseUserCartPreview {

    cart_id: SupabaseUserCartId
    cart_length: SupabaseUserCartLength
}