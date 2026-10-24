import emailjsInit from "./api/emailjsInit";
import SendEmailParam from "./model/SendEmailParam";
import EmailjsSendEmailRes from "./model/SendEmailRes";
import SendEmailClient from "./SendEmailClient";
import emailjs from "@emailjs/browser";

export default class EmailjsSendEmailClient implements SendEmailClient {

    constructor() {
        
        emailjsInit()
    }

    async send(param: SendEmailParam): Promise<EmailjsSendEmailRes> {
        
        const emailRes = await emailjs.send(

            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            {
                
                email: param.address,
                name: param.name,
                id: param.id
            }
        )

        return emailRes.status == 200
    }
}