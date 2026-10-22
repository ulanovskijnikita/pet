import VerifyEmailRes from "../../entites/user/model/res/VerifyUserEmailRes.ts";
import { UserEmail } from "../../entites/user/model/User.ts";
import UserGateway from "../../entites/user/gateway/UserGateway.ts";
import SendEmailClient from "../client/email/SendEmailClient.ts";
import VerifyEmailClient from "../client/email/VerifyEmailClient.ts";
import GetNewUserSecondUseCaseParam from "../../entites/user/model/param/GetNewUserSecondUseCaseParam.ts";
import { SecondStatus } from "../../entites/user/model/res/GetNewUserSecondUseCaseRes.ts";

export default class UserGatewayImpl implements UserGateway {

    constructor(

        private sendEmailClient: SendEmailClient,
        private verifyEmailClient: VerifyEmailClient,
    ) {}

    async verifyUserEmail(email: UserEmail): Promise<VerifyEmailRes> {

        const verifyingRes = await this.verifyEmailClient.verifying( email )

        return {

            isVerify: verifyingRes.status
        }
    }

    async getNewUserSecond(param: GetNewUserSecondUseCaseParam): Promise<SecondStatus> {

        const sendEmailRes = await this.sendEmailClient.send( param )

        return sendEmailRes.status
    }
}