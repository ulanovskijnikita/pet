import { ProductQuantity } from "./AddToUserCartParam";
import { UserCartLength } from "./UserCartPreview";

export default interface QuantityProductRes {

    quantity: ProductQuantity
    length: UserCartLength
}