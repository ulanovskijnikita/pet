import { createClient } from "@supabase/supabase-js";
import { StorageProductCategoryPath, StorageProductTag } from "../../model/StorageProduct";
import { StorageProductOwerview } from "../../model/StorageProductOwerview";
import { IProductStorageOwerview } from "./IProductStorageOwerview";
import { Database } from "../../../../database.types";



export class SupabaseProductStorageOwerview implements IProductStorageOwerview {

    private supabase = createClient<Database>(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)
    
    getByCategory(category: StorageProductCategoryPath): Promise<StorageProductOwerview[]> {
        throw new Error("Method not implemented.");
    }

    async getByCategoryWithLimit(categoryId: number, limit: number, userContext: number): Promise<StorageProductOwerview[]> {
        const { data: productsOwerview } = await this.supabase.from("products").select(`
                product_id,
                product_price_currency( currency_value ),
                product_price_count,
                product_rating,
                product_tag,
                product_img,
                product_statuses( product_status_value ),
                products_category_paths!inner( category_path( category_id, subcategory_id ) )`)
                .filter("products_category_paths.category_path.category_id", "eq", categoryId)
                // .filter()
                // .limit(limit);
        
        const { data: productsOwerviewFavorites } = await this.supabase.from("user_favourites")
            .select(`product_id`)
            .filter("user_id", "eq", userContext);
        
        return {
            favourites: productsOwerviewFavorites,
            products: productsOwerview
        }
    }

    getByTag(tag: StorageProductTag): Promise<StorageProductOwerview[]> {
        throw new Error("Method not implemented.");
    }

}