import { ProductTag } from "../../../../entites/product/model/Product";
import { ProductQuantity } from "../../../../entites/cart/model/param/AddToProgressCartUseCaseParam";

export default interface NavStater {

    changeCartLength(q: ProductQuantity): void

    get getTag(): ProductTag | null

    set setTag(tag: ProductTag)
}