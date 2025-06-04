import Product from "./Product";

export type ProducUsertRating = number

export default interface GetProductsByCartRes extends Product {

    userRating: ProducUsertRating | null
}