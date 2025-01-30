import { Category } from "../../../domain/model/Category";
import { Product, ProductId, ProductsGotByCategory, ProductsGotByTag, ProductsGotByUserFavourites, ProductTag } from "../../../domain/model/Product";
import { UserId } from "../../../domain/model/User";
import { IProductStorage } from "./IProductStorage";
import { createClient } from '@supabase/supabase-js'

export class SupabaseProductStorage implements IProductStorage {
    
    private supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

    async getById(productId: ProductId): Promise<Product> {
        const {data} = await this.supabase.from('product').select().eq('product_id', productId)
        return data![0] as Promise<Product>
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