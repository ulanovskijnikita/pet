import { UserId } from "../../../../domain/model/user/User";

export default interface AppStater {

    get getId(): UserId | null

    setId(): void
}