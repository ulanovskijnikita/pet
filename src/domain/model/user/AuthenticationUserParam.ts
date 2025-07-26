import { UserEmail } from "./User"
import { UserPassword } from "./UserDetails"

export default interface AuthenticationUserParam {

    email: UserEmail
    pass: UserPassword
}