import { CartProductQuantity } from "../../../shared/model/entities/Cart";
import { ProductTag } from "../../../shared/model/entities/Product";

export default interface NavStater {

    changeCartLength(q: CartProductQuantity): void

    get getTag(): ProductTag | null

    set setTag(tag: ProductTag)
}