import { IProduct } from "./IProduct"

export type UserId = number
export type UserName = string
export type UserStatus = "new" | "old"

export interface IUser {
    id: UserId
    name: UserName
    status: UserStatus
    favourites: IProduct[]
}