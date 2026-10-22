import User from "../User";

export type UserSignInResults = "nobody" | "incorrect" | "signIn"

export default interface UserSignInRes {

    user: User | null
    result: UserSignInResults
}