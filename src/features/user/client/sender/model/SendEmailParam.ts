export type EmailjsUserEmail = string
export type EmailjsUserName = string
export type EmailjsUserId = number

export default interface SendEmailParam {

    address: EmailjsUserEmail
    name: EmailjsUserName
    id: EmailjsUserId
}