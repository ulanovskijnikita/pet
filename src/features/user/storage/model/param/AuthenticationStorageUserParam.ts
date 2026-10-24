import { StorageUserEmail, StorageUserPassword } from "../StorageUser"

export default interface AuthenticationStorageUserParam {

    email: StorageUserEmail
    pass: StorageUserPassword
}
