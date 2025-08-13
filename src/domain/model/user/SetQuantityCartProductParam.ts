import AddToUserCartParam from "./AddToUserCartParam";

export type CartProductIndex = number

export default interface SetQuantityCartProductParam extends AddToUserCartParam {

    index: CartProductIndex
}