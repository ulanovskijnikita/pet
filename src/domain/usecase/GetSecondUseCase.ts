import EmailGateway from "../gateway/EmailGateway.ts";
import GetSecondUseCaseParam from "../model/email/GetSecondUseCaseParam.ts";
import GetSecondUseCaseRes from "../model/email/GetSecondUseCaseRes.ts";
import UserRepository from "../repository/UserRepository.ts";

export default class GetSecondUseCase {

    constructor(

        private readonly emailService: EmailGateway,
        private readonly userRepository: UserRepository,
    ) {}

    async execute(param: GetSecondUseCaseParam): Promise<GetSecondUseCaseRes> {

        if (param.status == "old") return {

            status: "old",
            action: false
        }

        const actionObj = await this.emailService.getSecond({
            
            address: param.address,
            name: param.name,
            id: param.id
        })

        if (actionObj.action) {

            return {

                action: actionObj.action,
                status: await this.userRepository.sendMessage({

                    id: param.id,
                    message: param.message
                })
            }
        } else {

            return {

                action: false,
                status: param.status
            }
        }
    }
}