import { ProductId, Product, ProductTag, ProductsGotByTag, ProductsGotByCategory, ProductsGotByUserFavourites } from "../../../src/model/Product";
import { UserId } from "../../../src/model/User";
import { IProductStorage } from "./IProductStorage";

export class SupabaseProductStorage implements IProductStorage {

    getById(productId: ProductId): Product {
        throw new Error("Method not implemented.");
    }
    searchByTag(productTag: ProductTag): ProductsGotByTag {
        throw new Error("Method not implemented.");
    }
    getByCategory(productCategory: Category, count?: number): ProductsGotByCategory {
        throw new Error("Method not implemented.");
    }
    getByUserFavourites(userId: UserId): ProductsGotByUserFavourites {
        throw new Error("Method not implemented.");
    }
}