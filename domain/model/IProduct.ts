import { ICategory } from "./ICategory"

export type ProductId = number
export type ProductPrice = {
    currency: string,
    count: number
}
export type ProductRating = number
export type ProductTag = string
export type ProductDesc = string
export type ProductImg = string
export type ProductStatus = "new" | "sold" | "sale" | null


export interface IProduct {
    id: ProductId
    price: ProductPrice
    rating: ProductRating
    tag: ProductTag
    desc: ProductDesc
    img: ProductImg
    status: ProductStatus
    category: ICategory[]
}