export type UserProgressCartId = number
export type UserCartLength = number

export default interface UserCartPreview {

    cartId: UserProgressCartId
    cartLength: UserCartLength
}