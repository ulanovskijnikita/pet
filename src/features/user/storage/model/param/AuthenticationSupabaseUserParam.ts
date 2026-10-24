import { SupabaseUserEmail, SupabaseUserPassword } from "../SupabaseUser"

export default interface AuthenticationSupabaseUserParam {

    email: SupabaseUserEmail
    pass: SupabaseUserPassword
}
