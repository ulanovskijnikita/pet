import { Category } from "../../../domain/model/Category";
import { Product, ProductId, ProductsGotByCategory, ProductsGotByTag, ProductsGotByUserFavourites, ProductStatus, ProductTag } from "../../../domain/model/Product";
import { UserId } from "../../../domain/model/User";
import { ProductRepository } from "../../../domain/repository/ProductRepository";
import { IProductStorage } from "../../storage/product/IProductStorage";

export class ProductRepositoryImpl implements ProductRepository {

    constructor(private supabaseProductStorage: IProductStorage) {}
    searchByTag(productTag: ProductTag): ProductsGotByTag {
        throw new Error("Method not implemented.");
    }
    getByCategory(productCategory: Category, count?: number): ProductsGotByCategory {
        throw new Error("Method not implemented.");
    }
    getByUserFavourites(userId: UserId): ProductsGotByUserFavourites {
        throw new Error("Method not implemented.");
    }

    async getById(productId: ProductId): Promise<Product> {
        const storageProduct = await this.supabaseProductStorage.getById(productId)
        
        const product: Product = {
            desc: storageProduct.product_desc,
            id: storageProduct.product_id,
            img: storageProduct.product_img,
            path: storageProduct.category_path.map(value => {
                return {
                    category: value.category_id.category_value,
                    subcategory: value.subcategory_id.subcategory_value
                }
            }),
            priceCount: storageProduct.product_price_count,
            priceCurrency: storageProduct.product_price_currency.currency_value,
            rating: storageProduct.product_rating,
            status: storageProduct.product_statuses.map(value => {
                return value.product_status_value
            }),
            tag: storageProduct.product_tag

        }
        return product
    }


    

}