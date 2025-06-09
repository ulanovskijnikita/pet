import Email from "./Email"

export type SendUserName = string

export type SendUserId = number

export default interface SendEmailParam {

    address: Email
    name: SendUserName
    id: SendUserId
}