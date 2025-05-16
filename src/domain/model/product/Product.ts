export type ProductId = number

export type ProductPriceCurrency = string
export type ProductPriceCount = number

export type ProductRating = number
export type ProductTag = string
export type ProductStatuses = string[] | null
export type ProductImg = string
export type ProductIsFavorites = boolean

export default interface Product {

    id: ProductId
    priceCurrency: ProductPriceCurrency
    priceCount: ProductPriceCount
    rating: ProductRating
    tag: ProductTag
    img: ProductImg
    statuses: ProductStatuses
    isFavorites: ProductIsFavorites
}