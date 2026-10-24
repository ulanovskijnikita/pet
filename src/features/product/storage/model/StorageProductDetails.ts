import StorageProduct from "../../../../shared/model/storage/StorageProduct"
import { StorageProductCategoryValue } from "./StorageProductCategory.ts";
import { StorageProductSubcategoryValue } from "./StorageProductSubcategory.ts";

export type StorageProductDesc = string

export default interface StorageProductDetails extends StorageProduct{

    product_desc: StorageProductDesc
    category: StorageProductCategoryValue
    subcategory: StorageProductSubcategoryValue
}