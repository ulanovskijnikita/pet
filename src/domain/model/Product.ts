import { Category } from "./Category"

export type ProductId = number
export type ProductPriceCurrency = string
export type ProductPriceCount = number
export type ProductRating = number
export type ProductTag = string
export type ProductDesc = string
export type ProductImg = string

export type ProductStatus = "new" | "sold" | "sale"

export type ProductsGotByCategory = Product[]
export type ProductsGotByUserFavourites = Product[]
export type ProductsGotByTag = Product[]

export interface Product {
    id: ProductId
    priceCurrency: ProductPriceCurrency
    priceCount: ProductPriceCount
    rating: ProductRating
    tag: ProductTag
    desc: ProductDesc
    img: ProductImg
    status?: ProductStatus[]
    category: Category[]
}