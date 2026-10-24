export type UserId = number
export type UserName = string
export type UserEmail = string

export type UserStatus = "new" | "old"

export type UserRateMessage = string

export default interface User {

    id: UserId
    name: UserName
    email: UserEmail
    status: UserStatus
}