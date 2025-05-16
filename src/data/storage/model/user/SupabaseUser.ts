export type SupabaseUserId = number
export type SupabaseUserName = string
export type SupabaseUserEmail = string
export type SupabaseUserPassword = string

export type SupabaseUserStatus = string

export default interface SupabaseUser {

    id: SupabaseUserId
    name: SupabaseUserName
    email: SupabaseUserEmail
    password: SupabaseUserPassword
    status: SupabaseUserStatus
}