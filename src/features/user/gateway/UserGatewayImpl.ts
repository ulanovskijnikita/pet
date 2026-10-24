import VerifyEmailRes from "../../../entities/user/model/res/VerifyUserEmailRes.ts";
import { UserEmail } from "../../../shared/model/entities/User.ts";
import UserGateway from "../../../entities/user/gateway/UserGateway.ts";
import SendEmailClient from "../client/sender/SendEmailClient.ts";
import VerifyEmailClient from "../client/verifier/VerifyEmailClient.ts";
import GetNewUserSecondUseCaseParam from "../../../entities/user/model/param/GetNewUserSecondUseCaseParam.ts";
import { SecondStatus } from "../../../entities/user/model/res/GetNewUserSecondUseCaseRes.ts";

export default class UserGatewayImpl implements UserGateway {

    constructor(

        private sendEmailClient: SendEmailClient,
        private verifyEmailClient: VerifyEmailClient,
    ) {}

    async verifyUserEmail(email: UserEmail): Promise<VerifyEmailRes> {

        const verifyingRes = await this.verifyEmailClient.verifying( email )

        return  verifyingRes
    }

    async getNewUserSecond(param: GetNewUserSecondUseCaseParam): Promise<SecondStatus> {

        const sendEmailRes = await this.sendEmailClient.send( param )

        return sendEmailRes
    }
}