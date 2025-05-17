export type UserProgressCartId = number
export type UserCartLength = number

export default interface UserCart {

    cartId: UserProgressCartId
    cartLength: UserCartLength
}