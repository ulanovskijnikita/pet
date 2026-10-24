import { StorageUserId } from "../../../../../shared/model/storage/StorageUser";
import { StorageProductId, StorageProductRating } from "../../../../../shared/model/storage/StorageProduct";

export default interface SetStorageProductRatingParam {

    userId: StorageUserId | null
    productId: StorageProductId
    rating: StorageProductRating
}