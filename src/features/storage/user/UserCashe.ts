import SessionUser, { SessionUserCartLength, SessionUserStatus } from "../model/user/SessionUser";
import SessionUserCartPreview from "../model/user/SessionUserCartPreview";

export default interface UserCashe {

    getUser(): SessionUser | null

    setUser(user: SessionUser): void

    addToCart(length: SessionUserCartLength): void

    setStatus(status: SessionUserStatus): void

    setCartPreview(param: SessionUserCartPreview): void
}