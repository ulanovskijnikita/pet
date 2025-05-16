import RegisterUserUseCaseParam from "../model/user/RegisterUserUseCaseParam";
import ValidateUserResult from "../model/user/ValidateUserResult";
import { UserRepository } from "../repository/UserRepository";

export default class RegisterUserUseCase {

    constructor(

        private userReposiory: UserRepository
    ) {}

    async execute(param: RegisterUserUseCaseParam): Promise<ValidateUserResult> {

        const validateRes = await this.userReposiory.validateUser( {...param} )

        const resultObj = {

            pass: param.pass == param.passAgain,

            ...validateRes
        }


        const result = Object.values(resultObj).every(value => value === true)

        if (result) this.userReposiory.register( {...param} )
    
        return {

            ...resultObj,
            result: result
        }
    }
}