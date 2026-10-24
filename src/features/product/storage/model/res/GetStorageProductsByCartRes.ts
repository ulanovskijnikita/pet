import StorageProduct from "../../../../../shared/model/storage/StorageProduct"

export type StorageProducUsertRating = number

export default interface GetStorageProductsByCartRes extends StorageProduct {

    user_rating: StorageProducUsertRating | null
}