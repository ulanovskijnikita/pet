import { Category } from "../../../domain/model/Category";
import { Product, ProductId, ProductsGotByCategory, ProductsGotByTag, ProductsGotByUserFavourites, ProductTag } from "../../../domain/model/Product";
import { UserId } from "../../../domain/model/User";
import { IProductStorage } from "./IProductStorage";
import { createClient } from '@supabase/supabase-js'
import { Database } from '../../../../database.types'
import { StorageProduct, StorageProductId } from "../../model/StorageProduct";

export class SupabaseProductStorage implements IProductStorage {
    
    private supabase = createClient<Database>(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

    async getById(storageProductId: StorageProductId): Promise<StorageProduct> {
        const { data } = await this.supabase
            .from("products")
            .select(`
                product_id,
                product_price_currency( currency_value ),
                product_price_count,
                product_rating,
                product_tag,
                product_desc,
                product_img,
                product_statuses( product_status_value ),
                category_path(
                    category_id( category_value ),
                    subcategory_id( subcategory_value )
                )`)
            .eq('product_id', storageProductId)
        return data![0]
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