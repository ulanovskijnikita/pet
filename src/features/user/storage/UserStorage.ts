import { StorageProductIsFavorites } from "../../../shared/model/storage/StorageProduct"
import AuthenticationStorageUserParam from "./model/param/AuthenticationStorageUserParam"
import RegisterStorageUserParam from "./model/param/RegisterStorageUserParam"
import ValidateStorageUserParam from "./model/param/ValidateStorageUserParam"
import IdentityStorageUserRes from "./model/res/IdentityStorageUserRes"
import ValidateStorageUserRes from "./model/res/ValidateStorageUserRes"
import { StorageUserEmail, StorageUserId, StorageUserRateMessage, StorageUserStatus } from "../../../shared/model/storage/StorageUser"
import AuthenticationStorageUserRes from "./model/res/AuthenticationStorageUserRes"
import AuthorizationStorageUserRes from "./model/res/AuthorizationStorageUserRes"
import ToggleFavouriteStorageProduct from "./model/param/ToggleFavouriteStorageProduct"

export default interface UserStorage {

    validate(param: ValidateStorageUserParam): Promise<ValidateStorageUserRes>

    identity(email: StorageUserEmail): Promise<IdentityStorageUserRes>
    
    authentication(param: AuthenticationStorageUserParam): Promise<AuthenticationStorageUserRes>

    authorization(id: StorageUserId): Promise<AuthorizationStorageUserRes>

    toggleFavouriteStorageProduct(param: ToggleFavouriteStorageProduct): Promise<StorageProductIsFavorites>

    register(param: RegisterStorageUserParam): Promise<void>

    setRateMessage(id: StorageUserId, message: StorageUserRateMessage): Promise<StorageUserStatus>
}