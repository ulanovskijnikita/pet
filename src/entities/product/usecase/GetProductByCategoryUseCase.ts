import GetProductByCategoryUseCaseParam from "../model/param/GetProductByCategoryUseCaseParam.ts";
import ProductRepository from "../repository/ProductRepository.ts";

export default class GetProductByCategoryUseCase {

    constructor(

        private readonly productRepository: ProductRepository
    ) {}

    async execute(param: GetProductByCategoryUseCaseParam) {

        return await this.productRepository.getByCategory(param)
    }
}