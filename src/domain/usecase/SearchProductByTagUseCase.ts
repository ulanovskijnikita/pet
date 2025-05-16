import ProductRepository from "../repository/ProductRepository.ts";
import SearchProductParam from "../model/product/SearchProductParam.ts";

export default class SearchProductByTagUseCase {

    constructor(
        private readonly productRepository: ProductRepository
    ) {}

    execute(param: SearchProductParam) {
        return this.productRepository.searchByTag(param)
    }
}