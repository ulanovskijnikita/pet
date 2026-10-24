import { UserId } from "../../user/model/User";
import CartRepository from "../repository/CartRepository";

export default class GetCartHistoryUseCase {

    constructor(

        private cartRepository: CartRepository
    ) {}

    async execute(id: UserId) {

        return this.cartRepository.getHistory( id )
    }
}