import { User, UserId } from "../model/User";

export interface UserRepository {

    getById(userId: UserId): User

    set(user: User): boolean
}