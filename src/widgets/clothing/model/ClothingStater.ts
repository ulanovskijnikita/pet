import { ProductSubcategoryId } from "../../../entities/product/model/ProductSubcategory";

export default interface ClothingStater {

    get getActiveSubCategoryId(): ProductSubcategoryId
}