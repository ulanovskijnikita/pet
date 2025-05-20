import { IsVerifyEmail } from "../email/VerifyEmailRes"
import { ValidateIsUnique } from "./ValidateUserRes"

export type ValidatePass = boolean
export type ValidateResult = boolean

export type ValidateEmail = {

    isUnique: ValidateIsUnique
    isVerify: IsVerifyEmail
}

export default interface RegisterUserUseCaseResult {

    email: ValidateEmail
    pass: ValidatePass
    result: ValidateResult
}