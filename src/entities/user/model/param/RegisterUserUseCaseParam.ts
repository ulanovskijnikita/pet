import { UserPassword } from "../UserDetails";
import { UserEmail, UserName } from "../../../../shared/model/entities/User";

export default interface RegisterUserUseCaseParam {

    passAgain: UserPassword
    name: UserName
    pass: UserPassword
    email: UserEmail
}