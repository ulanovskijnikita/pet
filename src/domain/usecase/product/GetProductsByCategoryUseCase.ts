import { Category } from "../../model/Category";
import { ProductRepository, ProductsGotByCategory } from "../../repository/ProductRepository";

export type GetProductsByCategoryParam = {
    productCategory: Category,
    count?: number
}

export class GetProductsByCategoryUseCase {

    constructor(private productRepository: ProductRepository) {}

    execute(param: GetProductsByCategoryParam): ProductsGotByCategory {
        return this.productRepository.getByCategory(param.productCategory, param?.count)
    }
}