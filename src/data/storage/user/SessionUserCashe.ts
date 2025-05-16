import sessionUserConst from "../consts/SessionUserConst";
import SessionUser, { SessionUserEmail, SessionUserId, SessionUserName, SessionUserStatus } from "../model/user/SessionUser";
import UserCashe from "./UserCashe";

export default class SessionUserCashe implements UserCashe {

    setUser(user: SessionUser): void {

        sessionStorage.setItem(sessionUserConst.id, user.id)
        sessionStorage.setItem(sessionUserConst.email, user.email)
        sessionStorage.setItem(sessionUserConst.name, user.name)

        sessionStorage.setItem(sessionUserConst.status, user.status)
    }

    getUser(): SessionUser | null {

        const id: SessionUserId | null = sessionStorage.getItem(sessionUserConst.id)
        const email: SessionUserEmail | null = sessionStorage.getItem(sessionUserConst.email)
        const name: SessionUserName | null = sessionStorage.getItem(sessionUserConst.name)
        const status: SessionUserStatus | null = sessionStorage.getItem(sessionUserConst.status)

        if (id && email && name && status) {

            return {

                id: id,
                email: email,
                name: name,
                status: status
            }
        } else {

            return null
        }
    }
}