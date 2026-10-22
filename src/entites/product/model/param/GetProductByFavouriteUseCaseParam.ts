import { UserId } from "../../../user/model/User";

export default interface GetProductByFavouriteUseCaseParam {

    id: UserId | null
    limit: number
    offset: number | null
}