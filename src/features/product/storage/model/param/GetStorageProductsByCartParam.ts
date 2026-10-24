import { StorageUserId } from "../../../user/model/StorageUser"
import { StorageUserCartId } from "../../../cart/model/StorageUserCartPreview"

export default interface GetStorageProductsByCartParam {

    userId: StorageUserId | null
    cartId: StorageUserCartId
}