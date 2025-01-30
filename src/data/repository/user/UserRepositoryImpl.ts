import { User, UserId } from "../../../domain/model/User";
import { UserRepository } from "../../../domain/repository/UserRepository";

export class UserRepositoryImpl implements UserRepository {

    constructor() {}

    getById(userId: UserId): User {
        throw new Error("Method not implemented.");
    }
    
    set(user: User): boolean {
        throw new Error("Method not implemented.");
    }

}