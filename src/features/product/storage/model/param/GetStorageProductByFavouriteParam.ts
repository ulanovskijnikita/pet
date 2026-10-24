import { StorageUserId } from "../../../../../shared/model/storage/StorageUser";

export default interface GetStorageProductByFavouriteParam {

    id: StorageUserId | null
    lim: number
    off_set: number | null
}