import RegisterUserUseCaseParam from "../model/user/RegisterUserUseCaseParam";
import RegisterUserUseCaseResult from "../model/user/RegisterUserUseCaseResult";
import UserRepository from "../repository/UserRepository";
import EmailGateway from "../gateway/EmailGateway";

export default class RegisterUserUseCase {

    constructor(

        private userReposiory: UserRepository,
        private emailService: EmailGateway,
    ) {}

    async execute(param: RegisterUserUseCaseParam): Promise<RegisterUserUseCaseResult> {

        const verifyEmail = await this.emailService.verifyEmail(param.email)

        const validateEmail = await this.userReposiory.validateUser( {email: param.email} )

        const matchPass = param.pass == param.passAgain

        const resultObj = {

            verifyEmail: verifyEmail.isVerify,
            validateEmail: validateEmail.isUnique,
            matchPass: matchPass,
        }

        const result = Object.values(resultObj).every(value => value === true)

        if (result) this.userReposiory.register( {...param} )
    
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