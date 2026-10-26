import UserRepository from "../repository/UserRepository";

export default class SignOutUserUseCase {

    constructor(

        private userRepository: UserRepository
    ) {}

    execute() {

        this.userRepository.signOut()
    }
}