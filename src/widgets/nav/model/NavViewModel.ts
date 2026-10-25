import { makeAutoObservable } from "mobx";
import NavStater from "./NavStater";
import { ProductTag } from "../../../shared/model/entities/Product";
import GetUserUseCase from "../../../entities/user/usecase/GetUserUseCase";
import { UserId } from "../../../shared/model/entities/User";
import Cart, { CartLength, CartProductQuantity } from "../../../shared/model/entities/Cart";
import GetProgressCartUseCase from "../../../entities/cart/usecase/GetProgressCartUseCase";

export default class NavViewModel implements NavStater {

    constructor(

        private getUserUseCase: GetUserUseCase,
        private getProgressCartUseCase: GetProgressCartUseCase,
    ) {

        makeAutoObservable(this)
    }

    private tag: ProductTag | null = null

    private length: CartLength | null = null

    private id: UserId | null = null

    get getTag() {

        return this.tag
    }

    get getLength() {

        return this.length
    }

    get getId() {

        return this.id
    }

    set setTag(tag: ProductTag) {

        this.tag = tag
    }

    *setLength() {

        const user = this.getUserUseCase.execute()

        if (user) {

            const cart: Cart = yield this.getProgressCartUseCase.execute( user.id )

            this.length = cart.cartLength
        } else {

            this.length = null
        }
    }

    setId() {
    
        const user = this.getUserUseCase.execute()

        if (user) {

            this.id = user.id
        } else {

            this.id = null
        }
    }

    changeCartLength(q: CartProductQuantity): void {
        
        this.length = q
    }
}