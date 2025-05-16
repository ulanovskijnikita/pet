import { ProductIsFavorites } from "../model/product/Product";
import ToggleUserFavouriteParam from "../model/user/ToggleUserFafouriteParam";
import { UserRepository } from "../repository/UserRepository";

export default class ToggleUserFavouriteUseCase {

    constructor(

        private userRepository: UserRepository
    ) {}

    async execute(param: ToggleUserFavouriteParam): Promise<ProductIsFavorites> {

        return await this.userRepository.toggleFavourite(param)
    }
}