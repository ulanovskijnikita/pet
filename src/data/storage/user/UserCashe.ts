import SessionUser, { SessionUserCartLength } from "../model/user/SessionUser";

export default interface UserCashe {

    getUser(): SessionUser | null

    setUser(user: SessionUser): void

    addToCart(length: SessionUserCartLength): void
}