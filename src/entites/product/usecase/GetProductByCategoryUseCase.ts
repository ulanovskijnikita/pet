import ProductCategoryUseCaseParam from "../model/param/ProductCategoryUseCaseParam.ts";
import ProductRepository from "../repository/ProductRepository.ts";

export default class GetProductByCategoryUseCase {

    constructor(

        private readonly productRepository: ProductRepository
    ) {}

    async execute(param: ProductCategoryUseCaseParam) {

        return await this.productRepository.getByCategory(param)
    }
}