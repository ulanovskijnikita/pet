import GetNewUserSecondUseCaseParam from "../model/param/GetNewUserSecondUseCaseParam.ts";
import { SecondStatus } from "../model/res/GetNewUserSecondUseCaseRes.ts";
import VerifyUserEmailRes from "../model/res/VerifyUserEmailRes.ts";
import { UserEmail } from "../../../shared/model/entities/User.ts";

export default interface UserGateway {

    getNewUserSecond(param: GetNewUserSecondUseCaseParam): Promise<SecondStatus>

    verifyUserEmail(email: UserEmail): Promise<VerifyUserEmailRes>
}