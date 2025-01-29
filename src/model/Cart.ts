import { Product } from './Product';
import { UserId } from './User';

export interface Cart {
    userId: UserId
    productList: Product[]
}