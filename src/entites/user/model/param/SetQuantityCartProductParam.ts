import AddToProgressCartUseCaseParam from "../../../cart/model/param/AddToProgressCartUseCaseParam";

export type CartProductIndex = number

export default interface SetQuantityCartProductParam extends AddToProgressCartUseCaseParam {

    index: CartProductIndex
}