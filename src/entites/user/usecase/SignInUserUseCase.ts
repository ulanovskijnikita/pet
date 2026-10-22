import SignInUserUseCaseParam from "../model/param/SignInUserUseCaseParam";
import UserSignInRes from "../model/res/UserSignInRes";
import UserRepository from "../repository/UserRepository";

export default class SignInUserUseCase {

    constructor(

        private userRepository: UserRepository,
    ) {}

    async execute(param: SignInUserUseCaseParam): Promise<UserSignInRes> {

        const identity = await this.userRepository.identity( param.email )

        if (!identity) return {

            result: "nobody",
            user: null,
        }

        const authentication = await this.userRepository.authentication({ email: param.email, pass: param.password })

        if (!authentication) return {

            result: "incorrect",
            user: null,
        }

        const authorization = await this.userRepository.authorization( authentication )

        // TODO: add cart

        return {

            result: "signIn",
            user: authorization,
        }
    }
}