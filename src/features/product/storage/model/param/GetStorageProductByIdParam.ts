import { StorageUserId } from "../../../../../shared/model/storage/StorageUser"
import { StorageProductId } from "../../../../../shared/model/storage/StorageProduct"

export default interface GetStorageProductByIdParam {

    productId: StorageProductId
    userId: StorageUserId | null
}