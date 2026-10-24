export type SessionUserId = string
export type SessionUserName = string
export type SessionUserEmail = string

export type SessionUserStatus = "new" | "old"

export default interface SessionUser {

    id: SessionUserId
    name: SessionUserName
    email: SessionUserEmail
    status: SessionUserStatus
}