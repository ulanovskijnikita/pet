import UserCart from "./UserCart"

export type UserId = number
export type UserName = string
export type UserEmail = string

export type UserStatus = string

export default interface User extends UserCart {

    id: UserId
    name: UserName
    email: UserEmail
    status: UserStatus
}

export const DEFAULT_USER_ID = 0