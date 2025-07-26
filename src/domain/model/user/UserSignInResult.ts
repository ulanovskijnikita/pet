import User from "./User";
import UserCartPreview from "./UserCartPreview";

export type UserSignInResults = "nobody" | "incorrect" | "signIn"

export default interface UserSignInResult {

    user: User & UserCartPreview | null
    result: UserSignInResults
}