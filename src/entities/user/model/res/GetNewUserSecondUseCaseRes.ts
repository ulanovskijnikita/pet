import { UserStatus } from "../User";

export type SecondStatus = boolean

export default interface GetNewUserSecondUseCaseRes {

    userStatus: UserStatus
    secondStatus: SecondStatus
}