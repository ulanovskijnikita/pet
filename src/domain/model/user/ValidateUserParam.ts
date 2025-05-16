import { UserEmail } from "./User";
import { UserPassword } from "./UserDetails";

export default interface ValidateUserParam {

    email: UserEmail
    pass: UserPassword
    passAgain: UserPassword
}