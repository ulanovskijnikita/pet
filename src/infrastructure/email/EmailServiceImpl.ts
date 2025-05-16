import EmailParam from "../../domain/model/email/EmailParam.ts";
import EmailRes from "../../domain/model/email/EmailRes.ts";
import EmailService from "../../domain/service/EmailService.ts";
import EmailSend from "../model/email/EmailSend.ts";

export default class EmailServiceImpl implements EmailService {

    constructor(

        private readonly emailSend: EmailSend,
    ) {}

    async sendEmail(param: EmailParam): Promise<EmailRes> {

        return await this.emailSend(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            {
                email: param.address,
                name: param.name,
            }
        )
    }
}