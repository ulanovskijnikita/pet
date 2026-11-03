import { ProductSubcategoryId } from "../../../entities/product/model/ProductSubcategory";

export default interface FoodiesStater {

    get getActiveSubCategoryId(): ProductSubcategoryId
}