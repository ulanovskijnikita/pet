import {ProductCategoryId} from "./ProductCategory.ts";
import {ProductSubcategoryId} from "./ProductSubcategory.ts";
import {UserId} from "../user/User.ts";
import ProductRange from "./ProductRange.ts";

export default interface ProductCategoryParam extends ProductRange {

    userId: UserId
    categoryId: ProductCategoryId
    subcategoryId: ProductSubcategoryId
}