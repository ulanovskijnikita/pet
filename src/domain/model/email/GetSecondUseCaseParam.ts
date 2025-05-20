import { UserMessage } from "../user/SendMessageParam.ts";
import {UserStatus} from "../user/User.ts";
import GetSecondParam from "./GetSecondParam.ts";

export default interface GetSecondUseCaseParam extends GetSecondParam {

    status: UserStatus
    message: UserMessage
}