import GetProductByFilterParam from "../model/product/GetProductByFilterParam";
import ProductRepository from "../repository/ProductRepository";

export default class GetProductByFilterUseCase {

    constructor(

        private productRepository: ProductRepository,
    ) {}

    async execute(param: GetProductByFilterParam) {

        return this.productRepository.getByFilter(param)
    }
}