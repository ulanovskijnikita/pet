import GetProductsByCartUseCaseParam from "../model/param/GetProductsByCartUseCaseParam";
import ProductRepository from "../repository/ProductRepository";

export default class GetProductsByCartUseCase {

    constructor(

        private productRepository: ProductRepository
    ) {}

    async execute(param: GetProductsByCartUseCaseParam) {

        return this.productRepository.getByCart(param)
    }
}