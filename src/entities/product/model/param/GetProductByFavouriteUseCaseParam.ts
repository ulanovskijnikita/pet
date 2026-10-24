import { UserId } from "../../../../shared/model/entities/User";

export default interface GetProductByFavouriteUseCaseParam {

    id: UserId | null
    limit: number
    offset: number | null
}