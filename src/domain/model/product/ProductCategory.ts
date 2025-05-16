export type ProductCategoryId = number
export type ProductCategoryValue = string

export default interface ProductCategory {
    id: ProductCategoryId
    value: ProductCategoryValue
}

export const ACCESSORIES: ProductCategory = {

    id: 1,
    value: "accessories",
}

export const CLOTHING: ProductCategory = {

    id: 2,
    value: "clothing",
}

export const FOODIES: ProductCategory = {

    id: 2,
    value: "foodies",
}