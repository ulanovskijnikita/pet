import { SupabaseUserEmail, SupabaseUserId, SupabaseUserPassword } from "./SupabaseUser"

type SupabaseUserSignInResponse = {

    user_id: SupabaseUserId
    user_email: SupabaseUserEmail
    user_password: SupabaseUserPassword
} | null

export default SupabaseUserSignInResponse