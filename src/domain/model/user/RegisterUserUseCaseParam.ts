import RegisterUserParam from "./RegisterUserParam";
import { UserPassword } from "./UserDetails";

export default interface RegisterUserUseCaseParam extends RegisterUserParam {

    passAgain: UserPassword
}