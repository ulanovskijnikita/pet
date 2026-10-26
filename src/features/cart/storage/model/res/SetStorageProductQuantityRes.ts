import { CartPrice } from "../../../../../shared/model/entities/Cart";
import { StorageCartLength, StorageCartProductQuantity } from "../../../../../shared/model/storage/StorageCart";
import StorageProduct from "../../../../../shared/model/storage/StorageProduct";
import { StorageUserId } from "../../../../../shared/model/storage/StorageUser";

type SetStorageProductQuantityRes = {

    cart_length: StorageCartLength
    quantity: StorageCartProductQuantity
    product: StorageProduct
    user_id: StorageUserId
    cart_total_price: CartPrice
}

export default SetStorageProductQuantityRes