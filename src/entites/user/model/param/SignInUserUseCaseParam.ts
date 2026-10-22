import { UserEmail } from "../User";
import { UserPassword } from "../UserDetails";

export default interface SignInUserUseCaseParam {

    email: UserEmail
    password: UserPassword
}