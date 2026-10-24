import { StorageUserId } from "../../../user/model/StorageUser";

export default interface GetStorageProductByFavouriteParam {

    id: StorageUserId | null
    lim: number
    off_set: number | null
}