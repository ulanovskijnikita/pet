import User from "../../../shared/model/entities/User";

export type UserPassword = string

export default interface UserDetails extends User {

    password: UserPassword
}