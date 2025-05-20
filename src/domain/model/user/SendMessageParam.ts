import { UserId } from "./User";

export type UserMessage = string

export default interface SendMessageParam {

    id: UserId
    message: UserMessage
}