import { Enums } from "../../lib/supabase/database.types"

export type CasheProductId = number

export type CasheProductPriceCurrency = Enums<"currencies">
export type CasheProductPriceCount = number

export type CasheProductRating = number
export type CasheProductTag = string
export type CasheProductStatuses = Enums<"product_status">[]
export type CasheProductImg = string
export type CasheProductIsFavorites = boolean

export default interface CasheProduct {

    id: CasheProductId
    price_currency: CasheProductPriceCurrency
    price_count: CasheProductPriceCount
    rating: CasheProductRating
    tag: CasheProductTag
    img: CasheProductImg
    statuses: CasheProductStatuses
    is_favorites: CasheProductIsFavorites
}