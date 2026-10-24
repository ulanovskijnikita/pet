import { UserId, UserRateMessage } from "../../../../../shared/model/entities/User"

export type StorageUserMessage = UserRateMessage

export default interface SendStorageMessageParam {

    id: UserId
    message: StorageUserMessage
}
