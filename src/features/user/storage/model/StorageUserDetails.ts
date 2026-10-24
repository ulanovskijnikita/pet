import StorageUser, { StorageUserPassword } from "../../../../shared/model/storage/StorageUser";

export default interface StorageUserDetails extends StorageUser {

    password: StorageUserPassword
}