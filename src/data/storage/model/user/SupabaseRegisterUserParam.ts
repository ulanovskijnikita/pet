import { SupabaseUserEmail, SupabaseUserName, SupabaseUserPassword } from "./SupabaseUser"

export default interface SupabaseRegisterUserParam {

    name: SupabaseUserName
    pass: SupabaseUserPassword
    email: SupabaseUserEmail
}