import GetProductByFavouriteParam from "../model/product/GetProductByFavouriteParam";
import ProductRepository from "../repository/ProductRepository";

export default class GetProductByFavouriteUseCase {

    constructor(

        private productRepository: ProductRepository
    ) {}

    async execute(param: GetProductByFavouriteParam) {

        return this.productRepository.getByFavourite(param)
    }
}