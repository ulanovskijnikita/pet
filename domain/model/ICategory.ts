export type Category = "accessories" | "clothing" | "foodies"
export type SubCategory = "all" | "cat" | "dog" | "bird" | "fish"

export interface ICategory {
    category: Category
    subCategory: SubCategory
}