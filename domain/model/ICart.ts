import { IProduct } from './IProduct';
import { UserId } from './IUser';

export interface ICart {
    userId: UserId
    productList: IProduct[]
}