export type EmailResStatus = number
export type EmailResText = string

export default interface EmailRes {
    status: EmailResStatus;
    text: EmailResText;
}