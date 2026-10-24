import GetProductByFavouriteUseCaseParam from "../model/param/GetProductByFavouriteUseCaseParam";
import ProductRepository from "../repository/ProductRepository";

export default class GetProductByFavouriteUseCase {

    constructor(

        private productRepository: ProductRepository
    ) {}

    async execute(param: GetProductByFavouriteUseCaseParam) {

        return this.productRepository.getByFavourite( param )
    }
}