import { Enums } from "../../../../infrastructure/supabase/database.types"
import SupabaseUserCartPreview from "./SupabaseUserCartPreview"

export type SupabaseUserId = number
export type SupabaseUserName = string
export type SupabaseUserEmail = string
export type SupabaseUserPassword = string

export type SupabaseUserStatus = Enums<"user_status">

export default interface SupabaseUser extends SupabaseUserCartPreview {

    id: SupabaseUserId
    name: SupabaseUserName
    email: SupabaseUserEmail
    status: SupabaseUserStatus
}