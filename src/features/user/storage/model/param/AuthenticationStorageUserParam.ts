import { StorageUserEmail, StorageUserPassword } from "../../../../../shared/model/storage/StorageUser"

export default interface AuthenticationStorageUserParam {

    email: StorageUserEmail
    pass: StorageUserPassword
}
