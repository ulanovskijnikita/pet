import { UserPassword } from "../UserDetails";
import { UserEmail, UserName } from "../User";

export default interface RegisterUserUseCaseParam {

    passAgain: UserPassword
    name: UserName
    pass: UserPassword
    email: UserEmail
}