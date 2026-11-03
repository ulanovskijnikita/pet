import { makeAutoObservable } from "mobx";
import NavStater from "../../nav/model/NavStater";
import ShoppingStater from "../../shopping/model/ShoppingStater";

export default class HeroViewModel {

    constructor(

        private navStater: NavStater,
        private shoppingStater: ShoppingStater,
    ) {

        makeAutoObservable(this)
    }

    get getSearchTag() {

        return this.navStater.getTag
    }

    get getCategory() {

        return this.shoppingStater.getCategory
    }

    get getSubCategory() {

        return this.shoppingStater.getSubCategory
    }
}