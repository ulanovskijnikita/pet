import { SupabaseUserId } from "./SupabaseUser"

export type SupabaseUserMessage = string

export default interface SendSupabaseMessageParam {

    id: SupabaseUserId
    message: SupabaseUserMessage
}