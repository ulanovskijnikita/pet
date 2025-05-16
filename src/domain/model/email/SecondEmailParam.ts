import {UserStatus} from "../user/User.ts";
import EmailParam from "./EmailParam.ts";

export default interface SecondEmailParam extends EmailParam {

    userStatus: UserStatus
}