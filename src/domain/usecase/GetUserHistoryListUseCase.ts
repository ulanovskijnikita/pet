import { UserId } from "../model/user/User";
import UserRepository from "../repository/UserRepository";

export default class GetUserHistoryListUseCase {

    constructor(

        private userRepository: UserRepository
    ) {}

    async execute(id: UserId) {

        return this.userRepository.getHistoryList(id)
    }
}