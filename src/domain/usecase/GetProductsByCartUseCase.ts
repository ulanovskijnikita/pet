import GetProductsByCartParam from "../model/product/GetProductsByCartParam";
import ProductRepository from "../repository/ProductRepository";

export default class GetProductsByCartUseCase {

    constructor(

        private productRepository: ProductRepository
    ) {}

    async execute(param: GetProductsByCartParam) {

        return this.productRepository.getByCart(param)
    }
}