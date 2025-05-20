import GetSecondRes from "../../domain/model/email/GetSecondRes.ts";
import GetSecondParam from "../../domain/model/email/GetSecondUseCaseParam.ts";
import VerifyEmailRes from "../../domain/model/email/VerifyEmailRes.ts";
import { UserEmail } from "../../domain/model/user/User.ts";
import EmailService from "../../domain/service/EmailService.ts";
import EmailSend from "../model/email/EmailSend.ts";

export default class EmailServiceImpl implements EmailService {

    constructor(

        private readonly emailSend: EmailSend,
    ) {}

    async verifyEmail(email: UserEmail): Promise<VerifyEmailRes> {

        const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${import.meta.env.VITE_ABSTRACT_KEY}&email=${email}`

        const response = await fetch(url)

        const data = await response.json()

        return {
            
            isVerify: data.deliverability === "DELIVERABLE"
        }
    }

    async getSecond(param: GetSecondParam): Promise<GetSecondRes> {

        const emailRes = await this.emailSend(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            {
                email: param.address,
                name: param.name,
                id: param.id
            }
        )

        return {

            action: emailRes.status == 200
        }
    }
}