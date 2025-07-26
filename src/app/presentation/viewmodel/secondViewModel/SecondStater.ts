import { UserId } from "../../../../domain/model/user/User";

export default interface SecondStater {

    set setId(id: UserId | null)
}