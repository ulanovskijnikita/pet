import { Category } from "../model/Category"
import { Product, ProductId, ProductsGotByCategory, ProductsGotByTag, ProductsGotByUserFavourites, ProductTag } from "../model/Product"
import { UserId } from "../model/User"

export interface ProductRepository {

    getById(productId: ProductId): Promise<Product>

    searchByTag(productTag: ProductTag): ProductsGotByTag

    getByCategory(productCategory: Category, count?: number): ProductsGotByCategory

    getByUserFavourites(userId: UserId): ProductsGotByUserFavourites
}