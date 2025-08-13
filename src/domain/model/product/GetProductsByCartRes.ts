import Product from "./Product";

export type ProductUserRating = number

export default interface GetProductsByCartRes extends Product {

    userRating: ProductUserRating | null
}