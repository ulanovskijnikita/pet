import { StorageUserId } from "../../user/storage/model/StorageUser"
import SetStorageProductQuantityParam from "./model/param/SetStorageProductQuantityParam"
import StorageCart, { StorageCartId, StorageCartLength } from "./model/StorageCart"
import StorageCartHistory from "./model/StorageCartHistory"

export default interface CartStorage {

    getProgressCart(id: StorageUserId): Promise<StorageCart>

    makeOrder(id: StorageCartId): Promise<StorageCart>

    getHistory(id: StorageUserId): Promise<StorageCartHistory>

    setProductQuantity(param: SetStorageProductQuantityParam): Promise<StorageCartLength>
}