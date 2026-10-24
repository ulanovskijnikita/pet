import { UserEmail } from "../../../../shared/model/entities/User";
import { UserPassword } from "../UserDetails";

export default interface SignInUserUseCaseParam {

    email: UserEmail
    password: UserPassword
}