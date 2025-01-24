import { IProduct, ProductId } from '../model/IProduct';
import { ProductRepository } from './../repository/ProductRepository';

export type GetProductByIdParam = {
    productId: ProductId
}

export class GetProductByIdUseCase {

    constructor(private productRepository: ProductRepository) {}

    execute(param: GetProductByIdParam): IProduct {
        return this.productRepository.getById(param.productId)
    }
}