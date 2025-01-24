import { IUser, UserId } from "../model/IUser";

export interface UserRepository {
    
    getById(userId: UserId): IUser

    set(user: IUser): boolean
}