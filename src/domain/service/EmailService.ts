import EmailParam from "../model/email/EmailParam.ts";
import EmailRes from "../model/email/EmailRes.ts";

export default interface EmailService {

    sendEmail(param: EmailParam): Promise<EmailRes>
}