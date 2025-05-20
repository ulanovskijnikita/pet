import sessionUserConst from "../consts/sessionUserConst";
import SessionUser, { SessionUserCartId, SessionUserCartLength, SessionUserEmail, SessionUserId, SessionUserName, SessionUserStatus } from "../model/user/SessionUser";
import UserCashe from "./UserCashe";

export default class SessionUserCashe implements UserCashe {

    setStatus(status: SessionUserStatus): void {
        
        sessionStorage.setItem(sessionUserConst.status, status)
    }

    addToCart(length: SessionUserCartLength): void {

        sessionStorage.setItem(sessionUserConst.cartLength, length)
    }

    setUser(user: SessionUser): void {

        sessionStorage.setItem(sessionUserConst.id, user.id)
        sessionStorage.setItem(sessionUserConst.email, user.email)
        sessionStorage.setItem(sessionUserConst.name, user.name)
        sessionStorage.setItem(sessionUserConst.status, user.status)
        sessionStorage.setItem(sessionUserConst.cartId, user.cartId)
        sessionStorage.setItem(sessionUserConst.cartLength, user.cartLength)
    }

    getUser(): SessionUser | null {

        const id: SessionUserId | null = sessionStorage.getItem(sessionUserConst.id)
        const email: SessionUserEmail | null = sessionStorage.getItem(sessionUserConst.email)
        const name: SessionUserName | null = sessionStorage.getItem(sessionUserConst.name)
        const status: SessionUserStatus | null = sessionStorage.getItem(sessionUserConst.status) as SessionUserStatus
        const cartId: SessionUserCartId | null = sessionStorage.getItem(sessionUserConst.cartId)
        const cartLength: SessionUserCartLength | null = sessionStorage.getItem(sessionUserConst.cartLength)

        if (id && email && name && status && cartId && cartLength) {

            return {

                id: id,
                email: email,
                name: name,
                status: status,
                cartId: cartId,
                cartLength: cartLength
            }
        } else {

            return null
        }
    }
}