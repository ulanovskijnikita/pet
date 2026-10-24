import { UserId, UserRateMessage } from "../../../../../entities/user/model/User"

export type StorageUserMessage = UserRateMessage

export default interface SendStorageMessageParam {

    id: UserId
    message: StorageUserMessage
}
