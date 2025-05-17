export type SessionUserId = string
export type SessionUserName = string
export type SessionUserEmail = string
export type SessionUserStatus = string
export type SessionUserCartId = string
export type SessionUserCartLength = string

export default interface SessionUser {

    id: SessionUserId
    name: SessionUserName
    email: SessionUserEmail
    status: SessionUserStatus
    cartId: SessionUserCartId
    cartLength: SessionUserCartId
}