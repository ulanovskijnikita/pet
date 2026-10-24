import AbstractVerifyEmail from "./model/AbstractVerifyEmail";
import VerifyingEmailRes from "./model/VerifyEmailRes";
import VerifyEmailClient from "./VerifyEmailClient";

export default class AbstractVerifyEmailClient implements VerifyEmailClient {

    constructor() {}

    async verifying(email: AbstractVerifyEmail): Promise<VerifyingEmailRes> {
        
        const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${import.meta.env.VITE_ABSTRACT_KEY}&email=${email}`
        
        const response = await fetch( url )

        const data = await response.json()

        return data.deliverability === "DELIVERABLE"
    }
}