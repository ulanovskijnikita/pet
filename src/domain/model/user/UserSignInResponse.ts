import { UserEmail, UserId } from "./User"
import { UserPassword } from "./UserDetails"

type UserSignInResponse = {

    id: UserId
    email: UserEmail
    password: UserPassword
} | null

export default UserSignInResponse