import ToggleFavouriteProductParam from "../model/param/ToggleUserFafouriteParam";
import UserRepository from "../repository/UserRepository";

export default class ToggleFavouriteProductUseCase {

    constructor(

        private userRepository: UserRepository
    ) {}

    async execute(param: ToggleFavouriteProductParam) {

        return await this.userRepository.toggleFavouriteProduct( param )
    }
}