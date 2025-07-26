import UserIdParam from "../model/user/UserIdParam";
import UserSignInResult from "../model/user/UserSignInResult";
import UserRepository from "../repository/UserRepository";

export default class SignInUserUseCase {

    constructor(

        private userRepository: UserRepository
    ) {}

    async execute(param: UserIdParam): Promise<UserSignInResult> {

        const identity = await this.userRepository.identityUser(param.email)

        if (!identity) return {

            result: "nobody",
            user: null
        }

        const authentication = await this.userRepository.authenticationUser({email: param.email, pass: param.password})

        if (!authentication) return {

            result: "incorrect",
            user: null
        }

        const authorization = await this.userRepository.authorizationUser(authentication)

        return {

            result: "signIn",
            user: authorization
        }
    }
}