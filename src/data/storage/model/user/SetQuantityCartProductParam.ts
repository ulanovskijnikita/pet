import AddToUserCartParam from "../../../../domain/model/user/AddToUserCartParam";

export type CartProductIndex = number

export default interface SetQuantityCartProductParam extends AddToUserCartParam {

    index: CartProductIndex
}