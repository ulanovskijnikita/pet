import UserRepository from "../repository/UserRepository";

export default class GetUserUseCase {

    constructor(

        private userRepository: UserRepository
    ) {}

    execute() {

        return this.userRepository.get()
    }
}