import { Category } from "../../../domain/model/Category"
import { Product, ProductId, ProductsGotByCategory, ProductsGotByTag, ProductsGotByUserFavourites, ProductTag } from "../../../domain/model/Product"
import { UserId } from "../../../domain/model/User"
import { StorageProduct, StorageProductId } from "../../model/StorageProduct"

export interface IProductStorage {

    getById(storageProductId: StorageProductId): Promise<StorageProduct>

    searchByTag(productTag: ProductTag): ProductsGotByTag

    getByCategory(productCategory: Category, count?: number): ProductsGotByCategory

    getByUserFavourites(userId: UserId): ProductsGotByUserFavourites
}