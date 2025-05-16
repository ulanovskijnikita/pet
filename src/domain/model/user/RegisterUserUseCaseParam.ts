import RegisterUserParam from "./RegisterUserParam";
import ValidateUserParam from "./ValidateUserParam";

export default interface RegisterUserUseCaseParam extends ValidateUserParam, RegisterUserParam  {}