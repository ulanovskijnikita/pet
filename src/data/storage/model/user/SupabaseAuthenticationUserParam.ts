import { SupabaseUserEmail, SupabaseUserPassword } from "./SupabaseUser";

export default interface SupabaseAuthenticationUserParam {

    email: SupabaseUserEmail
    pass: SupabaseUserPassword
}