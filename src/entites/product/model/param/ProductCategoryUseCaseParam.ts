import {ProductCategoryId} from "../ProductCategory.ts";
import {ProductSubcategoryId} from "../ProductSubcategory.ts";
import {UserId} from "../../../user/model/User.ts";

export default interface ProductCategoryUseCaseParam {

    userId: UserId | null
    categoryId: ProductCategoryId
    subcategoryId: ProductSubcategoryId
    limit: number
    offset: number | null
}