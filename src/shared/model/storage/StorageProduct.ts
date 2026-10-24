import { Enums } from "../../../../shared/lib/supabase/database.types"

export type StorageProductId = number

export type StorageProductPriceCurrency = Enums<"currencies">
export type StorageProductPriceCount = number

export type StorageProductRating = number
export type StorageProductTag = string
export type StorageProductStatuses = Enums<"product_status">[]
export type StorageProductImg = string
export type StorageProductIsFavorites = boolean

export default interface StorageProduct {

    id: StorageProductId
    price_currency: StorageProductPriceCurrency
    price_count: StorageProductPriceCount
    rating: StorageProductRating
    tag: StorageProductTag
    img: StorageProductImg
    statuses: StorageProductStatuses
    is_favorites: StorageProductIsFavorites
}