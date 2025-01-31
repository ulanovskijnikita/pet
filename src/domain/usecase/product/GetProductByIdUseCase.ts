import { Product, ProductId } from '../../model/Product';
import { ProductRepository } from '../../repository/ProductRepository';

export type GetProductByIdParam = {
    productId: ProductId
}

export class GetProductByIdUseCase {

    constructor(private productRepository: ProductRepository) {}

    execute(param: GetProductByIdParam): Promise<Product> {
        return this.productRepository.getById(param.productId)
    }
}