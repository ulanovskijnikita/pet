import { PathCategoryId } from "./Category"
import { Product } from "./Product"

export type UserId = number
export type UserName = string
export type UserEmail = string

export type UserStatus = "new" | "old"

export type Favourites = Product[]
export type Cart = Product[]

export interface User {
    id: UserId
    name: UserName
    email: UserEmail
    status: UserStatus
    favourites: Favourites
    ratingHistories: PathCategoryId[]
    cart: Cart
}