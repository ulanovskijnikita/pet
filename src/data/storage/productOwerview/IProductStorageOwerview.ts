import { StorageProductCategoryPath, StorageProductTag } from "../../model/StorageProduct";
import { StorageProductOwerview } from "../../model/StorageProductOwerview";

export interface IProductStorageOwerview {
    
    getByCategory(category: StorageProductCategoryPath, userContext: string): Promise<StorageProductOwerview[]>

    getByCategoryWithLimit(category: number, limit: number, userContext: number): Promise<StorageProductOwerview[]>

    getByTag(tag: StorageProductTag, userContext: string): Promise<StorageProductOwerview[]>
}