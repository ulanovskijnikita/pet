import SendEmailParam from "./model/SendEmailParam";
import EmailjsSendEmailRes from "./model/SendEmailRes";

export default interface SendEmailClient {

    send(param: SendEmailParam): Promise<EmailjsSendEmailRes>
}