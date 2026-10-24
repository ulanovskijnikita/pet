import { StorageUserEmail, StorageUserName, StorageUserPassword } from "../StorageUser"

export default interface RegisterStorageUserParam {

    name: StorageUserName
    pass: StorageUserPassword
    email: StorageUserEmail
}