export type PathCategoryId = number
export type ParentCategory = "accessories" | "clothing" | "foodies"
export type ChildCategory = "all" | "cat" | "dog" | "bird" | "fish"

export interface Category {
    pathCategoryId: PathCategoryId
    parentCategory: ParentCategory
    childCategory: ChildCategory
}