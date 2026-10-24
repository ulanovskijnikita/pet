export type ProductCategoryId = number
export type ProductCategoryValue = "accessories" | "clothing" | "foodies"

export default interface ProductCategory {
    
    id: ProductCategoryId
    value: ProductCategoryValue
}