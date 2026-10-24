import { UserId } from "../../../../entities/user/model/User";

export default interface AppStater {

    get getId(): UserId | null

    setId(): void
}