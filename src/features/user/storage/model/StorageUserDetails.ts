import StorageUser, { StorageUserPassword } from "./StorageUser";

export default interface StorageUserDetails extends StorageUser {

    password: StorageUserPassword
}