import RegisterUserUseCaseParam from "../model/param/RegisterUserUseCaseParam";
import RegisterUserUseCaseRes from "../model/res/RegisterUserUseCaseRes";
import UserRepository from "../repository/UserRepository";
import UserGateway from "../gateway/UserGateway";

export default class RegisterUserUseCase {

    constructor(

        private userReposiory: UserRepository,
        private userGateway: UserGateway,
    ) {}

    async execute(param: RegisterUserUseCaseParam): Promise<RegisterUserUseCaseRes> {

        const verifyEmail = await this.userGateway.verifyUserEmail( param.email )

        const validateEmail = await this.userReposiory.validate({

            email: param.email
        })

        const matchPass = param.pass == param.passAgain

        const resultObj = {

            verifyEmail: verifyEmail.isVerify,
            validateEmail: validateEmail.isUnique,
            matchPass: matchPass,
        }

        const result = Object.values( resultObj ).every(value => value === true)

        if ( result ) this.userReposiory.register({ ...param })
    
        return {

            email: {

                isUnique: resultObj.validateEmail,
                isVerify: resultObj.verifyEmail,
            },
            pass: resultObj.matchPass,
            result: result
        }
    }
}