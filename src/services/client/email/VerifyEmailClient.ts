import Email from "../model/email/Email";
import VerifyingEmailRes from "../model/email/VerifyingEmailRes";

export default interface VerifyEmailClient {

    verifying(email: Email): Promise<VerifyingEmailRes>
}