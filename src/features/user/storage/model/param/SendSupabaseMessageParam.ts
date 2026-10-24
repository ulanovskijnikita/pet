import { UserId, UserRateMessage } from "../../../../../entities/user/model/User"

export type SupabaseUserMessage = UserRateMessage

export default interface SendSupabaseMessageParam {

    id: UserId
    message: SupabaseUserMessage
}
