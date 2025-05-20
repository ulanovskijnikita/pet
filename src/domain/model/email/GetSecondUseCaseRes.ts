import { UserStatus } from "../user/User";
import GetSecondRes from "./GetSecondRes";

export default interface GetSecondUseCaseRes extends GetSecondRes {

    status: UserStatus
}