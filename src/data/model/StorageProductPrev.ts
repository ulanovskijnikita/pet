import { StorageProductCount, StorageProductCurrency, StorageProductId, StorageProductImg, StorageProductRating, StorageProductStatuses, StorageProductTag } from "./StorageProduct";

export interface StorageProductPrev {
    product_id: StorageProductId;
    product_price_currency: StorageProductCurrency;
    product_price_count: StorageProductCount;
    product_rating: StorageProductRating;
    product_tag: StorageProductTag;
    product_img: StorageProductImg;
    product_statuses: StorageProductStatuses[];
}