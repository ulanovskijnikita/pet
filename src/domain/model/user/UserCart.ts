import Product from "../product/Product";

export type UserCartQuantity = number

export default interface UserCart extends Product {

    quantity: UserCartQuantity
}