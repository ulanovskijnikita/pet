import { ProductTag } from "../../../../entities/product/model/Product";
import { ProductQuantity } from "../../../../entities/cart/model/param/SetProductQuantityParam";

export default interface NavStater {

    changeCartLength(q: ProductQuantity): void

    get getTag(): ProductTag | null

    set setTag(tag: ProductTag)
}