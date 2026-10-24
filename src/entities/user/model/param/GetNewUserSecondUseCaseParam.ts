import {UserEmail, UserId, UserName, UserRateMessage, UserStatus} from "../User.ts";

export default interface GetNewUserSecondUseCaseParam {

    address: UserEmail
    name: UserName
    id: UserId
    status: UserStatus
    message: UserRateMessage
}