import Product from "../Product";

export type ProductUserRating = number

export default interface GetProductsByCartUseCaseRes extends Product {

    userRating: ProductUserRating | null
}