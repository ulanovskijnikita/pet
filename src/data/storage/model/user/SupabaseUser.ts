import SupabaseUserCart from "./SupabaseUserCart"

export type SupabaseUserId = number
export type SupabaseUserName = string
export type SupabaseUserEmail = string
export type SupabaseUserPassword = string

export type SupabaseUserStatus = string

export default interface SupabaseUser extends SupabaseUserCart {

    id: SupabaseUserId
    name: SupabaseUserName
    email: SupabaseUserEmail
    status: SupabaseUserStatus
}