import SessionUser, { SessionUserStatus, SessionUserId, SessionUserEmail, SessionUserName } from "./model/SessionUser";
import SESSION_USER_EMAIL from "./const/sessionUserEmail";
import SESSION_USER_ID from "./const/sessionUserId";
import SESSION_USER_NAME from "./const/sessionUserName";
import SESSION_USER_STATUS from "./const/sessionUserStatus";
import UserCashe from "./UserCashe";

export default class SessionUserCashe implements UserCashe {

    setStatus(status: SessionUserStatus): void {
        
        sessionStorage.setItem(SESSION_USER_STATUS, status)
    }

    setUser(user: SessionUser): void {

        sessionStorage.setItem(SESSION_USER_ID, user.id)
        sessionStorage.setItem(SESSION_USER_EMAIL, user.email)
        sessionStorage.setItem(SESSION_USER_NAME, user.name)
        sessionStorage.setItem(SESSION_USER_STATUS, user.status)
    }

    getUser(): SessionUser | null {

        const id: SessionUserId | null = sessionStorage.getItem( SESSION_USER_ID )
        const email: SessionUserEmail | null = sessionStorage.getItem( SESSION_USER_EMAIL )
        const name: SessionUserName | null = sessionStorage.getItem( SESSION_USER_NAME )
        const status: SessionUserStatus | null = sessionStorage.getItem( SESSION_USER_STATUS ) as SessionUserStatus

        if (id && email && name && status) {

            return {

                id: id,
                email: email,
                name: name,
                status: status,
            }
        } else {

            return null
        }
    }
}