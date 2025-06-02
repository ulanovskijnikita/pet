import GetProductByIdParam from "../model/product/GetProductByIdParam";
import ProductRepository from "../repository/ProductRepository";

export default class GetProductByIdUseCase {

    constructor(

        private productRepository: ProductRepository
    ) {}

    async execute(param: GetProductByIdParam) {

        return this.productRepository.getById(param)
    }
}