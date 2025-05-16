import { UserEmail, UserId, UserPassword } from "./User"

type UserSignInResponse = {

    id: UserId
    email: UserEmail
    password: UserPassword
} | null

export default UserSignInResponse