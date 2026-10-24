import SetProductQuantityParam from "../../../cart/model/param/SetProductQuantityParam";

export type CartProductIndex = number

export default interface SetQuantityCartProductParam extends SetProductQuantityParam {

    index: CartProductIndex
}