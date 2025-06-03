import { DEFAULT_USER_ID } from "../model/user/User";
import UserIdParam from "../model/user/UserIdParam";
import UserSignInResult from "../model/user/UserSignInResult";
import UserRepository from "../repository/UserRepository";

export default class SignInUserUseCase {

    constructor(

        private userRepository: UserRepository
    ) {}

    async execute(param: UserIdParam): Promise<UserSignInResult> {

        const userSignInResponse = await this.userRepository.getSignInResponse(param.email)

        switch (userSignInResponse) {
            case null :
                return {

                    result: "nobody",
                    userId: DEFAULT_USER_ID
                }

            default :
                if (userSignInResponse.password == param.password) {

                    return {
                        
                        result: "signIn",
                        userId: userSignInResponse.id
                    }
                } else {

                    return {

                        result: "incorrect",
                        userId: DEFAULT_USER_ID
                    }
                }

        } 
    }
}