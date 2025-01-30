import { Category } from "../../../domain/model/Category"
import { Product, ProductId, ProductsGotByCategory, ProductsGotByTag, ProductsGotByUserFavourites, ProductTag } from "../../../domain/model/Product"
import { UserId } from "../../../domain/model/User"

export interface IProductStorage {

    getById(productId: ProductId): Promise<Product>

    searchByTag(productTag: ProductTag): ProductsGotByTag

    getByCategory(productCategory: Category, count?: number): ProductsGotByCategory

    getByUserFavourites(userId: UserId): ProductsGotByUserFavourites
}