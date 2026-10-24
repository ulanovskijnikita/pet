import { makeAutoObservable } from "mobx";
import NavStater from "./NavStater";
import { ProductTag } from "../../../../shared/model/entities/Product";
import { CartLength } from "../../../../entities/cart/model/CartPreview";
import GetUserUseCase from "../../../../entities/user/usecase/GetUserUseCase";
import { ProductQuantity } from "../../../../entities/cart/model/param/SetProductQuantityParam";
import { UserId } from "../../../../shared/model/entities/User";

export default class NavViewModel implements NavStater {

    constructor(

        private getUserUseCase: GetUserUseCase,
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

    setLength() {

        const user = this.getUserUseCase.execute()

        if (user) {

            this.length = user.cartLength
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

    changeCartLength(q: ProductQuantity): void {
        
        this.length = q
    }
}