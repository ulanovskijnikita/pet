import SetProductRatingUseCaseParam from "../model/product/SetProductRatingUseCaseParam";
import ProductRepository from "../repository/ProductRepository";

export default class SetProductRatingUseCase {

    constructor(

        private productRepository: ProductRepository
    ) {}

    async execute(param: SetProductRatingUseCaseParam) {

        return this.productRepository.setRating(param)
    }
}