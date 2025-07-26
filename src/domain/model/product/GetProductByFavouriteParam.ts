import { UserId } from "../user/User";
import ProductRange from "./ProductRange";

export default interface GetProductByFavouriteParam extends ProductRange {

    id: UserId | null
}