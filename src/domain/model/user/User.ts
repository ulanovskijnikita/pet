import UserCartPreview from "./UserCartPreview"

export type UserId = number
export type UserName = string
export type UserEmail = string

export type UserStatus = "new" | "old"

export default interface User extends UserCartPreview {

    id: UserId
    name: UserName
    email: UserEmail
    status: UserStatus
}

export const DEFAULT_USER_ID = 0