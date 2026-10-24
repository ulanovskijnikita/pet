import { UserId } from "../../shared/model/entities/User";

export default interface AppStater {

    get getId(): UserId | null

    setId(): void
}