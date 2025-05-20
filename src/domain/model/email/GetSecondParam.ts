import {UserEmail, UserId, UserName} from "../user/User.ts";

export default interface GetSecondParam {

    address: UserEmail
    name: UserName
    id: UserId
}