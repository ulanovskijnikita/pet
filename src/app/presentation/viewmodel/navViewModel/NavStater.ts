import { ProductTag } from "../../../../domain/model/product/Product";
import { ProductQuantity } from "../../../../domain/model/user/AddToUserCartParam";

export default interface NavStater {

    changeCartLength(q: ProductQuantity): void

    get getTag(): ProductTag | null

    set setTag(tag: ProductTag)
}