import {Enums} from "../supabase/database.types.ts";

export type SupabaseProductId = number

export type SupabaseProductPriceCurrency = Enums<"currencies">
export type SupabaseProductPriceCount = number

export type SupabaseProductRating = number
export type SupabaseProductTag = string
export type SupabaseProductStatuses = Enums<"product_status">[]
export type SupabaseProductImg = string
export type SupabaseProductIsFavorites = boolean

export default interface SupabaseProduct {

    id: SupabaseProductId
    price_currency: SupabaseProductPriceCurrency
    price_count: SupabaseProductPriceCount
    rating: SupabaseProductRating
    tag: SupabaseProductTag
    img: SupabaseProductImg
    statuses: SupabaseProductStatuses
    is_favorites: SupabaseProductIsFavorites
}