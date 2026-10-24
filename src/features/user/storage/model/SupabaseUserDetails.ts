import SupabaseUser, { SupabaseUserPassword } from "./SupabaseUser";

export default interface SupabaseUserDetails extends SupabaseUser {

    password: SupabaseUserPassword
}