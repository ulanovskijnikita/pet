import { UserStatus } from "../../../../shared/model/entities/User";

export type SecondStatus = boolean

export default interface GetNewUserSecondUseCaseRes {

    userStatus: UserStatus
    secondStatus: SecondStatus
}