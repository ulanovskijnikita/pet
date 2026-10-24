import Product from "../../../../shared/model/entities/Product";

export type ProductUserRating = number

export default interface GetProductsByCartUseCaseRes extends Product {

    userRating: ProductUserRating | null
}