import { Category } from "../../../domain/model/Category"
import { Product, ProductId, ProductsGotByCategory, ProductsGotByTag, ProductsGotByUserFavourites, ProductTag } from "../../../domain/model/Product"
import { UserId } from "../../../domain/model/User"
import { StorageProduct, StorageProductId, StorageProductTag } from "../../model/StorageProduct"
import { StorageProductPrev } from "../../model/StorageProductOwerview"

export interface IProductStorage {

    getById(storageProductId: StorageProductId): Promise<StorageProduct>

    searchByTag(storageProductTag: StorageProductTag): Promise<StorageProductPrev>

    getByCategory(productCategory: Category, limit?: number): ProductsGotByCategory

    getByUserFavourites(userId: UserId): ProductsGotByUserFavourites
}