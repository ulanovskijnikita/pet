
import GetSecondParam from "../model/email/GetSecondParam.ts";
import GetSecondRes from "../model/email/GetSecondRes.ts";
import VerifyEmailRes from "../model/email/VerifyEmailRes.ts";
import { UserEmail } from "../model/user/User.ts";

export default interface EmailService {

    getSecond(param: GetSecondParam): Promise<GetSecondRes>

    verifyEmail(email: UserEmail): Promise<VerifyEmailRes>
}