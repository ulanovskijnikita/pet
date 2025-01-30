import { Category } from "../../../domain/model/Category";
import { ProductId, ProductTag } from "../../../domain/model/Product";
import { UserId } from "../../../domain/model/User";
import { ProductRepository } from "../../../domain/repository/ProductRepository";
import { IProductStorage } from "../../storage/product/IProductStorage";

export class ProductRepositoryImpl implements ProductRepository {

    constructor(private supabaseProductStorage: IProductStorage) {}

    getById(productId: ProductId) {
        this.supabaseProductStorage.getById(productId)
    }
    searchByTag(productTag: ProductTag) {
        throw new Error("Method not implemented.");
    }
    getByCategory(productCategory: Category, count?: number) {
        throw new Error("Method not implemented.");
    }
    getByUserFavourites(userId: UserId) {
        throw new Error("Method not implemented.");
    }


    

}