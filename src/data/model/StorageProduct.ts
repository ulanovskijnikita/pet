export type StorageProductId = number
export type StorageProductCurrency = {
    currency_value: string;
}
export type StorageProductCount = number
export type StorageProductRating = number
export type StorageProductTag = string
export type StorageProductDesc = string
export type StorageProductImg = string
export type StorageProductStatuses = {
    product_status_value: string
}
export type StorageProductCategoryPath = {
    category_id: {
        category_value: string
    },
    subcategory_id: {
        subcategory_value: string
    }
}

export interface StorageProduct {
    
    product_id: StorageProductId;
    product_price_currency: StorageProductCurrency;
    product_price_count: StorageProductCount;
    product_rating: StorageProductRating;
    product_tag: StorageProductTag;
    product_desc: StorageProductDesc;
    product_img: StorageProductImg;
    product_statuses: StorageProductStatuses[];
    category_path: StorageProductCategoryPath[]
}