import { VerifyUserEmailRes } from "./VerifyUserEmailRes"
import { ValidateIsUnique } from "./ValidateUserRes"

export type ValidatePass = boolean
export type ValidateResult = boolean

export type ValidateEmail = {

    isUnique: ValidateIsUnique
    isVerify: VerifyUserEmailRes
}

export default interface RegisterUserUseCaseRes {

    email: ValidateEmail
    pass: ValidatePass
    result: ValidateResult
}