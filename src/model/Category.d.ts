type PathId = number
type ParentCategory = "accessories" | "clothing" | "foodies"
type ChildCategory = "all" | "cat" | "dog" | "bird" | "fish"

interface Category {
    pathId: PathId
    parentCategory: ParentCategory
    childCategory: ChildCategory
}