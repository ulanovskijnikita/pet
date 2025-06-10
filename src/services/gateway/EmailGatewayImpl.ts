import GetSecondRes from "../../domain/model/email/GetSecondRes.ts";
import GetSecondParam from "../../domain/model/email/GetSecondUseCaseParam.ts";
import VerifyEmailRes from "../../domain/model/email/VerifyEmailRes.ts";
import { UserEmail } from "../../domain/model/user/User.ts";
import EmailGateway from "../../domain/gateway/EmailGateway.ts";
import SendEmailClient from "../client/email/SendEmailClient.ts";
import VerifyEmailClient from "../client/email/VerifyEmailClient.ts";

export default class EmailGatewayImpl implements EmailGateway {

    constructor(

        private sendEmailClient: SendEmailClient,
        private verifyEmailClient: VerifyEmailClient,
    ) {}

    async verifyEmail(email: UserEmail): Promise<VerifyEmailRes> {

        const verifyingRes = await this.verifyEmailClient.verifying(email)

        return {

            isVerify: verifyingRes.status
        }
    }

    async getSecond(param: GetSecondParam): Promise<GetSecondRes> {

        const sendEmailRes = await this.sendEmailClient.send(param)

        return {

            action: sendEmailRes.status
        }
    }
}