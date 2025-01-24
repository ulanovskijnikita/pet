import { ICategory } from "../model/ICategory";
import { IProduct, ProductId, ProductTag } from "../model/IProduct";
import { UserId } from "../model/IUser";

export type ProductsGotByCategory = IProduct[]
export type ProductsGotByUserFavourites = IProduct[]
export type ProductsGotByTag = IProduct[]

export interface ProductRepository {

    getById(productId: ProductId): IProduct

    searchByTag(productTag: ProductTag): ProductsGotByTag

    getByCategory(productCategory: ICategory, count?: number): ProductsGotByCategory

    getByUserFavourites(userId: UserId): ProductsGotByUserFavourites
}