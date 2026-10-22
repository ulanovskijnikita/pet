import { ProductQuantity } from "../../../product/model/Product";
import { CartLength } from "../CartPreview";

export default interface GetCartLengthUseCaseRes {

    quantity: ProductQuantity
    length: CartLength
}