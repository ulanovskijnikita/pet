import UserGateway from "../gateway/UserGateway.ts";
import GetNewUserSecondUseCaseParam from "../model/param/GetNewUserSecondUseCaseParam.ts";
import GetNewUserSecondUseCaseRes from "../model/res/GetNewUserSecondUseCaseRes.ts";
import UserRepository from "../repository/UserRepository.ts";

export default class GetNewUserSecondUseCase {

    constructor(

        private userGateway: UserGateway,
        private userRepository: UserRepository,
    ) {}

    async execute(param: GetNewUserSecondUseCaseParam): Promise<GetNewUserSecondUseCaseRes> {

        if (param.status == "old") return {

            userStatus: "old",
            secondStatus: false
        }

        const secondStatus = await this.userGateway.getNewUserSecond( param )

        if ( secondStatus ) {

            return {

                secondStatus: secondStatus,
                userStatus: await this.userRepository.setRateMessage( param.id, param.message )
            }
        } else {

            return {

                secondStatus: false,
                userStatus: param.status
            }
        }
    }
}