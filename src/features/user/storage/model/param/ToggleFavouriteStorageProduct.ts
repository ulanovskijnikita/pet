import { StorageProductId } from "../../../../product/storage/model/StorageProduct"
import { StorageUserId } from "../StorageUser"

export default interface ToggleFavouriteStorageProduct {

    userId: StorageUserId | null
    productId: StorageProductId
}
