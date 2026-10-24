import { StorageProductId } from "../../../../product/storage/model/StorageProduct"
import { StorageUserId } from "../../../../../shared/model/storage/StorageUser"

export default interface ToggleFavouriteStorageProduct {

    userId: StorageUserId | null
    productId: StorageProductId
}
