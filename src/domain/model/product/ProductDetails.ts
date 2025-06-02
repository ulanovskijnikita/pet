import Product from "./Product.ts";
import { ProductCategoryValue } from "./ProductCategory.ts";
import { ProductSubcategoryValue } from "./ProductSubcategory.ts";

export type ProductDesc = string

export default interface ProductDetails extends Product{

    desc: ProductDesc
    category: ProductCategoryValue
    subcategory: ProductSubcategoryValue
}