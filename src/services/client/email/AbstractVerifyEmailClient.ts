import Email from "../model/email/Email";
import VerifyingEmailRes from "../model/email/VerifyingEmailRes";
import VerifyEmailClient from "./VerifyEmailClient";

export default class AbstractVerifyEmailClient implements VerifyEmailClient {

    constructor() {}

    async verifying(email: Email): Promise<VerifyingEmailRes> {
        
        const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${import.meta.env.VITE_ABSTRACT_KEY}&email=${email}`
        
        const response = await fetch(url)

        const data = await response.json()

        return {
            
            status: data.deliverability === "DELIVERABLE"
        }
    }
}