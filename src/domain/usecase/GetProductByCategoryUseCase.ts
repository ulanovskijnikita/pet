import ProductRepository from "../repository/ProductRepository.ts";
import ProductCategoryParam from "../model/product/ProductCategoryParam.ts";

export default class GetProductByCategoryUseCase {

    constructor(

        private readonly productRepository: ProductRepository
    ) {}

    async execute(param: ProductCategoryParam) {

        return await this.productRepository.getByCategory(param)
    }
}