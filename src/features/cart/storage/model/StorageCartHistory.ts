import { StorageProductId, StorageProductTag } from "../../../product/storage/model/StorageProduct";
import { StorageCartId, StorageCartPrice, StorageCartProductQuantity, StorageCartStatus } from "./StorageCart";

type StorageCartHistory = {

    cart_id: StorageCartId
    cart_status: StorageCartStatus
    cart_price: StorageCartPrice
    cart_products: {

        id: StorageProductId
        tag: StorageProductTag
        q: StorageCartProductQuantity
    }
}[]

export default StorageCartHistory