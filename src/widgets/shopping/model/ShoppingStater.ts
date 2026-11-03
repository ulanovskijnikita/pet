import { ProductCategoryId } from "../../../entities/product/model/ProductCategory"
import { ProductSubcategoryId } from "../../../entities/product/model/ProductSubcategory"
import { ProductTag } from "../../../shared/model/entities/Product"

export default interface ShoppingStater {

    getCategory: ProductCategoryId

    getSubCategory: ProductSubcategoryId

    setProduct(category: ProductCategoryId, subCategory: ProductSubcategoryId, tag: ProductTag | null): void

    unsetProduct(): void
}