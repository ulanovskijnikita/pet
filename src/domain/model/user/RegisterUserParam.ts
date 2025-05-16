import { UserEmail, UserName } from "./User";
import { UserPassword } from "./UserDetails";

export default interface RegisterUserParam {

    name: UserName
    pass: UserPassword
    email: UserEmail
}