import SendEmailParam from "../model/email/SendEmailParam";
import SendEmailRes from "../model/email/SendEmailRes";

export default interface SendEmailClient {

    send(param: SendEmailParam): Promise<SendEmailRes>
}