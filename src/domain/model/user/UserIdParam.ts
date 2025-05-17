import { UserEmail } from "./User";
import { UserPassword } from "./UserDetails";

export default interface UserIdParam {

    email: UserEmail
    password: UserPassword
}