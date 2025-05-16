import SessionUser from "../model/user/SessionUser";

export default interface UserCashe {

    getUser(): SessionUser | null

    setUser(user: SessionUser): void
}