import SupabaseProduct from "./SupabaseProduct"

export type SupabaseProducUsertRating = number

export default interface GetSupabaseProductsByCartRes extends SupabaseProduct {

    user_rating: SupabaseProducUsertRating | null
}