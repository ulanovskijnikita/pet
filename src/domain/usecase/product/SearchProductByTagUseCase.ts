import { Product, ProductTag } from "../../model/Product";
import { ProductRepository, ProductsGotByTag } from "../../repository/ProductRepository";

export type SearchProductByTagParam = {
    productTag: ProductTag
}

export class SearchProductByTagUseCase {

    constructor(private productRepository: ProductRepository) {}

    execute(param: SearchProductByTagParam): ProductsGotByTag {
        return this.productRepository.searchByTag(param.productTag)
    }
}