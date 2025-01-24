import { ICategory } from "../model/ICategory";
import { ProductRepository, ProductsGotByCategory } from "../repository/ProductRepository";

export type GetProductsByCategoryParam = {
    productCategory: ICategory,
    count?: number
}

export class GetProductsByCategoryUseCase {

    constructor(private productRepository: ProductRepository) {}

    execute(param: GetProductsByCategoryParam): ProductsGotByCategory {
        return this.productRepository.getByCategory(param.productCategory, param?.count)
    }
}