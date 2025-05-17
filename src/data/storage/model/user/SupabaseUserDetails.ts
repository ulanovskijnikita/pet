import SupabaseUser from "./SupabaseUser";

export type SupabaseUserPassword = string

export default interface SupabaseUserDetails extends SupabaseUser {

    password: SupabaseUserPassword
}