import { Category } from "../../src/model/Category";
import { Product, ProductId, ProductsGotByCategory, ProductsGotByTag, ProductsGotByUserFavourites, ProductTag } from "../../src/model/Product";
import { UserId } from "../../src/model/User";

export interface ProductRepository {

    getById(productId: ProductId): Product

    searchByTag(productTag: ProductTag): ProductsGotByTag

    getByCategory(productCategory: Category, count?: number): ProductsGotByCategory

    getByUserFavourites(userId: UserId): ProductsGotByUserFavourites
}