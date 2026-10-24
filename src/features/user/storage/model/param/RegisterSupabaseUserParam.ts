import { SupabaseUserEmail, SupabaseUserName, SupabaseUserPassword } from "../SupabaseUser"

export default interface RegisterSupabaseUserParam {

    name: SupabaseUserName
    pass: SupabaseUserPassword
    email: SupabaseUserEmail
}