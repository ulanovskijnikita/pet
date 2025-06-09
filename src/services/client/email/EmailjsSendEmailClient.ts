import SendEmailParam from "../model/email/SendEmailParam";
import SendEmailRes from "../model/email/SendEmailRes";
import SendEmailClient from "./SendEmailClient";
import emailjs from "@emailjs/browser";

export default class EmailjsSendEmailClient implements SendEmailClient {

    constructor() {
        
        emailjs.init({

            limitRate: {

                throttle: 60_000
            },
            publicKey: import.meta.env.VITE_EMAIL_KEY
        })
    }

    async send(param: SendEmailParam): Promise<SendEmailRes> {
        
        const emailRes = await emailjs.send(

            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            {
                
                email: param.address,
                name: param.name,
                id: param.id
            }
        )

        return {

            status: emailRes.status == 200
        }
    }
}