import {Options} from "@emailjs/browser/es/types/Options";
import {EmailJSResponseStatus} from "@emailjs/browser";

export default interface EmailSend {

    (serviceID: string, templateID: string, templateParams?: Record<string, unknown>, options?: (Options | string)): Promise<EmailJSResponseStatus>
}