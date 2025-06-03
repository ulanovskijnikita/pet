import User from "../model/user/User";
import UserRepository from "../repository/UserRepository";

export default class GetUserUseCase {

    constructor(

        private userRepository: UserRepository
    ) {}

    execute(): User | null {

        return this.userRepository.get()
    }
}