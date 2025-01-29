import { UserId, User } from "../../domain/model/User";
import { UserRepository } from "../../domain/repository/UserRepository";

export class UserRepositoryImpl implements UserRepository {
    getById(userId: UserId): User {
        // здесь должны определяться все методы для работой с данными UserRepository'я
        throw new Error("Method not implemented.");
    }
    
    set(user: User): boolean {
        throw new Error("Method not implemented.");
    }

}