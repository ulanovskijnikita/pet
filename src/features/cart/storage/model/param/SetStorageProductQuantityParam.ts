import { StorageProductId } from "../../../../product/storage/model/StorageProduct"
import { StorageCartId, StorageCartProductQuantity } from "../StorageCart"

export default interface SetStorageProductQuantityParam {

    cartId: StorageCartId
    productId: StorageProductId
    quantity: StorageCartProductQuantity
}