import GetUserCasheRes from "./model/res/GetUserCasheRes"
import SessionUser, { SessionUserStatus } from "./model/SessionUser"

export default interface UserCashe {

    getUser(): GetUserCasheRes

    setUser(user: SessionUser): void

    setStatus(status: SessionUserStatus): void
}