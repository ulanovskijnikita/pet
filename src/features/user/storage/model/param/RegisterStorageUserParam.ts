import { StorageUserEmail, StorageUserName, StorageUserPassword } from "../../../../../shared/model/storage/StorageUser"

export default interface RegisterStorageUserParam {

    name: StorageUserName
    pass: StorageUserPassword
    email: StorageUserEmail
}