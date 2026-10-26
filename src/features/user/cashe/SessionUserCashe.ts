import CasheUser, { CasheUserStatus, CasheUserId, CasheUserEmail, CasheUserName } from "../../../shared/model/cashe/CasheUser";
import SESSION_USER_EMAIL from "./const/sessionUserEmail";
import SESSION_USER_ID from "./const/sessionUserId";
import SESSION_USER_NAME from "./const/sessionUserName";
import SESSION_USER_STATUS from "./const/sessionUserStatus";
import UserCashe from "./UserCashe";

export default class SessionUserCashe implements UserCashe {

    signOut(): void {
    
        sessionStorage.clear()
    }

    setStatus(status: CasheUserStatus): void {
        
        sessionStorage.setItem(SESSION_USER_STATUS, status)
    }

    setUser(user: CasheUser): void {

        sessionStorage.setItem(SESSION_USER_ID, user.id)
        sessionStorage.setItem(SESSION_USER_EMAIL, user.email)
        sessionStorage.setItem(SESSION_USER_NAME, user.name)
        sessionStorage.setItem(SESSION_USER_STATUS, user.status)
    }

    getUser(): CasheUser | null {

        const id: CasheUserId | null = sessionStorage.getItem( SESSION_USER_ID )
        const email: CasheUserEmail | null = sessionStorage.getItem( SESSION_USER_EMAIL )
        const name: CasheUserName | null = sessionStorage.getItem( SESSION_USER_NAME )
        const status: CasheUserStatus | null = sessionStorage.getItem( SESSION_USER_STATUS ) as CasheUserStatus

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