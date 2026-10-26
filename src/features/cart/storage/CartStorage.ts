import { StorageUserId } from "../../../shared/model/storage/StorageUser"
import SetStorageProductQuantityParam from "./model/param/SetStorageProductQuantityParam"
import StorageCart, { StorageCartId } from "../../../shared/model/storage/StorageCart"
import StorageCartHistory from "./model/StorageCartHistory"
import SetStorageProductQuantityRes from "./model/res/SetStorageProductQuantityRes"

export default interface CartStorage {

    getProgressCart(id: StorageUserId): Promise<StorageCart>

    makeOrder(id: StorageCartId): Promise<StorageCart>

    getHistory(id: StorageUserId): Promise<StorageCartHistory>

    setProductQuantity(param: SetStorageProductQuantityParam): Promise<SetStorageProductQuantityRes>
}