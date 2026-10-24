import { StorageProductId } from "../../../../../shared/model/storage/StorageProduct"
import { StorageUserId } from "../../../../../shared/model/storage/StorageUser"

export default interface ToggleFavouriteStorageProduct {

    userId: StorageUserId | null
    productId: StorageProductId
}
