import { makeAutoObservable } from "mobx";
import NavStater from "./NavStater";
import { ProductTag } from "../../../../entites/product/model/Product";
import { CartLength } from "../../../../entites/cart/model/CartPreview";
import GetUserUseCase from "../../../../entites/user/usecase/GetUserUseCase";
import { ProductQuantity } from "../../../../entites/cart/model/param/AddToProgressCartUseCaseParam";
import { UserId } from "../../../../entites/user/model/User";

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