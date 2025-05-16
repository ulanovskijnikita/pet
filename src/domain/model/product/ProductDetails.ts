import Product from "./Product.ts";
import ProductCategory from "./ProductCategory.ts";
import ProductSubcategory from "./ProductSubcategory.ts";

export type ProductDesc = string

export type ProductUserRating = string

export default interface ProductDetails extends Product{

    desc: ProductDesc
    category: ProductCategory
    subcategory: ProductSubcategory
    userRating: ProductUserRating
}