import User from "./User";

export type UserPassword = string

export default interface UserDetails extends User {

    password: UserPassword
}