import AbstractVerifyEmail from "./model/AbstractVerifyEmail";
import VerifyingEmailRes from "./model/VerifyEmailRes";

export default interface VerifyEmailClient {

    verifying(email: AbstractVerifyEmail): Promise<VerifyingEmailRes>
}