import { ProductId } from "../product/Product";
import { UserId } from "./User";

export default interface ToggleUserFavouriteParam {

    userId: UserId
    productId: ProductId
}