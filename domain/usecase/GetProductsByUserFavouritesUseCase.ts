import { UserId } from "../model/IUser";
import { ProductRepository, ProductsGotByUserFavourites } from "../repository/ProductRepository";

export type GetProductsByUserFavouritesParam = {
    userId: UserId
}

export class GetProductsByUserFavouritesUseCase {

    constructor(private productRepository: ProductRepository) {}

    execute(param: GetProductsByUserFavouritesParam): ProductsGotByUserFavourites {
        return this.productRepository.getByUserFavourites(param.userId)
    }
}