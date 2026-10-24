import { Enums } from "../../../../shared/model/database.types"

export type SupabaseUserId = number
export type SupabaseUserName = string
export type SupabaseUserEmail = string
export type SupabaseUserPassword = string

export type SupabaseUserStatus = Enums<"user_status">

export type SupabaseUserRateMessage = string

export default interface SupabaseUser {

    id: SupabaseUserId
    name: SupabaseUserName
    email: SupabaseUserEmail
    status: SupabaseUserStatus
}