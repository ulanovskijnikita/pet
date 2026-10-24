import { UserEmail } from "../../../../shared/model/entities/User"
import { UserPassword } from "../UserDetails"

export default interface AuthenticationUserParam {

    email: UserEmail
    pass: UserPassword
}