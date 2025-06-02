export type ProductSubcategoryId = number
export type ProductSubcategoryValue = "all" | "cat" | "dog" | "bird" | "fish"

export default interface ProductSubcategory {
    id: ProductSubcategoryId,
    value: ProductSubcategoryValue
}