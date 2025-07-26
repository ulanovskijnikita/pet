import { makeAutoObservable } from "mobx";
import NavStater from "./NavStater";
import { ProductTag } from "../../../../domain/model/product/Product";
import { UserCartLength } from "../../../../domain/model/user/UserCartPreview";
import GetUserUseCase from "../../../../domain/usecase/GetUserUseCase";
import { ProductQuantity } from "../../../../domain/model/user/AddToUserCartParam";
import { UserId } from "../../../../domain/model/user/User";

export default class NavViewModel implements NavStater {

    constructor(

        private getUserUseCase: GetUserUseCase,
    ) {

        makeAutoObservable(this)
    }

    private tag: ProductTag | null = null

    private length: UserCartLength | null = null

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