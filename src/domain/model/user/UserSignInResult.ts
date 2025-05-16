import { UserId } from "./User";

export type UserSignInResults = "nobody" | "incorrect" | "signIn"

export default interface UserSignInResult {

    userId: UserId
    result: UserSignInResults
}