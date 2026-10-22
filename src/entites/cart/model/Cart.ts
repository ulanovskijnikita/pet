import Product from "../../product/model/Product";

export type CartId = number

export default interface Cart {

    id: CartId
    productList: Product[]
}