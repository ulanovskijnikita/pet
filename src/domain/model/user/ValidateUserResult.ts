import { ValidateEmail } from "./ValidateUserRes";

export type ValidatePass = boolean
export type ValidateResult = boolean

export default interface ValidateUserResult {

    email: ValidateEmail
    pass: ValidatePass
    result: ValidateResult
}