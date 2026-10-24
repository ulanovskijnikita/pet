import { UserId } from "../../../user/model/User";
import { ProductTag } from "../Product";
import { ProductCategoryId } from "../ProductCategory";
import ProductOrder from "../ProductOrder";
import { ProductSubcategoryId } from "../ProductSubcategory";

export default interface GetProductByFilterUseCaseParam {

    userId: UserId | null
    categoryId: ProductCategoryId
    subcategoryId: ProductSubcategoryId
    order: ProductOrder
    tag: ProductTag
    limit: number
    offset: number | null
}