import { UserMessage } from "./SendMessageParam.ts";
import {UserEmail, UserId, UserName, UserStatus} from "../User.ts";

export default interface GetNewUserSecondUseCaseParam {

    address: UserEmail
    name: UserName
    id: UserId
    status: UserStatus
    message: UserMessage
}