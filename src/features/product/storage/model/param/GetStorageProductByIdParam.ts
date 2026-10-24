import { StorageUserId } from "../../../user/model/StorageUser"
import { StorageProductId } from "../StorageProduct"

export default interface GetStorageProductByIdParam {

    productId: StorageProductId
    userId: StorageUserId | null
}