import { StorageUserId } from "../../../user/model/StorageUser";
import { StorageProductId, StorageProductRating } from "../StorageProduct";

export default interface SetStorageProductRatingParam {

    userId: StorageUserId | null
    productId: StorageProductId
    rating: StorageProductRating
}