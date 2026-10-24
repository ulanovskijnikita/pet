import GetProductByFilterUseCaseParam from "../model/param/GetProductByFilterUseCaseParam";
import ProductRepository from "../repository/ProductRepository";

export default class GetProductByFilterUseCase {

    constructor(

        private productRepository: ProductRepository,
    ) {}

    async execute(param: GetProductByFilterUseCaseParam) {

        return this.productRepository.getByFilter( param )
    }
}