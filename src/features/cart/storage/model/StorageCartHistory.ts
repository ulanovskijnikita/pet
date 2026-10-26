import { StorageProductId, StorageProductTag } from "../../../../shared/model/storage/StorageProduct";
import { StorageCartId, StorageCartPrice, StorageCartProductQuantity, StorageCartStatus } from "../../../../shared/model/storage/StorageCart";

type StorageCartHistory = {

    cart_id: StorageCartId
    cart_status: StorageCartStatus
    cart_price: StorageCartPrice
    cart_products: {

        id: StorageProductId
        tag: StorageProductTag
        q: StorageCartProductQuantity
    }[]
}[]

export default StorageCartHistory