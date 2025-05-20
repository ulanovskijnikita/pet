import SessionUser, { SessionUserCartLength, SessionUserStatus } from "../model/user/SessionUser";

export default interface UserCashe {

    getUser(): SessionUser | null

    setUser(user: SessionUser): void

    addToCart(length: SessionUserCartLength): void

    setStatus(status: SessionUserStatus): void
}