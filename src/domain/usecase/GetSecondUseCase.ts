import EmailService from "../service/EmailService.ts";
import EmailRes from "../model/email/EmailRes.ts";
import SecondEmailParam from "../model/email/SecondEmailParam.ts";

export default class GetSecondUseCase {
    constructor(
        private readonly emailService: EmailService,
    ) {}

    async execute(param: SecondEmailParam): Promise<EmailRes> {

        if (param.userStatus == "old") return {
            status: -1,
            text: "Вы уже получили свою скидку"
        }

        return await this.emailService.sendEmail({
            address: param.address,
            name: param.name,
        })
    }
}