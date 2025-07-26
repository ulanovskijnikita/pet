import { UserId } from "../user/User";
import { ProductTag } from "./Product";
import { ProductCategoryId } from "./ProductCategory";
import { ProductOrderId } from "./ProductOrder";
import ProductRange from "./ProductRange";
import { ProductSubcategoryId } from "./ProductSubcategory";

export default interface GetProductByFilterParam extends ProductRange {

    userId: UserId | null
    categoryId: ProductCategoryId
    subcategoryId: ProductSubcategoryId
    order: ProductOrderId
    tag: ProductTag
}