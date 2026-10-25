export type CasheUserId = string
export type CasheUserName = string
export type CasheUserEmail = string

export type CasheUserStatus = "new" | "old"

export default interface CasheUser {

    id: CasheUserId
    name: CasheUserName
    email: CasheUserEmail
    status: CasheUserStatus
}