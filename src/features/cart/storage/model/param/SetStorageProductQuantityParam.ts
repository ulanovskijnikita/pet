import { StorageProductId } from "../../../../../shared/model/storage/StorageProduct"
import { StorageCartId, StorageCartProductQuantity } from "../../../../../shared/model/storage/StorageCart"

export default interface SetStorageProductQuantityParam {

    cartId: StorageCartId
    productId: StorageProductId
    quantity: StorageCartProductQuantity
}