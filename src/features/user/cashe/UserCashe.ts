import GetUserCasheRes from "./model/res/GetUserCasheRes"
import CasheUser, { CasheUserStatus } from "./model/CasheUser"

export default interface UserCashe {

    getUser(): GetUserCasheRes

    setUser(user: CasheUser): void

    setStatus(status: CasheUserStatus): void
}