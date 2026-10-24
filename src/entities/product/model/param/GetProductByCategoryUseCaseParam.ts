import {ProductCategoryId} from "../ProductCategory.ts";
import {ProductSubcategoryId} from "../ProductSubcategory.ts";
import {UserId} from "../../../../shared/model/entities/User.ts";

export default interface GetProductByCategoryUseCaseParam {

    userId: UserId | null
    categoryId: ProductCategoryId
    subcategoryId: ProductSubcategoryId
    limit: number
    offset: number | null
}