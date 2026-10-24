import { Enums } from "../../lib/supabase/database.types"

export type StorageUserId = number
export type StorageUserName = string
export type StorageUserEmail = string
export type StorageUserPassword = string

export type StorageUserStatus = Enums<"user_status">

export type StorageUserRateMessage = string

export default interface StorageUser {

    id: StorageUserId
    name: StorageUserName
    email: StorageUserEmail
    status: StorageUserStatus
}