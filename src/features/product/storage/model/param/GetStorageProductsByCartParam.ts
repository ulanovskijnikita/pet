import { StorageUserId } from "../../../../../shared/model/storage/StorageUser"
import { StorageCartId } from "../../../../../shared/model/storage/StorageCart"

export default interface GetStorageProductsByCartParam {

    userId: StorageUserId | null
    cartId: StorageCartId
}