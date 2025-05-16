export type ProductLimit = number
export type ProductOffset = number | null

export default interface ProductRange {

    limit: ProductLimit
    offset: ProductOffset
}