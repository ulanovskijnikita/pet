import { makeAutoObservable } from "mobx";
import NavStater from "../../nav/model/NavStater";
import AppStater from "../../../app/model/AppStater";
import ShoppingStater from "../../shopping/model/ShoppingStater";
import FoodiesStater from "../../foodies/model/FoodiesStater";
import ClothingStater from "../../clothing/model/ClothingStater";

export default class FooterViewModel {

    constructor(

        private navStater: NavStater,
        private appStater: AppStater,
        private shoppingStater: ShoppingStater,
        private foodiesStater: FoodiesStater,
        private clothingStater: ClothingStater,
    ) {

        makeAutoObservable(this)
    }

    get getUserId() {

        return this.appStater.getUserId
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

    get getFoodiesSubCategory() {

        return this.foodiesStater.getActiveSubCategoryId
    }

    get getClothingSubCategory() {

        return this.clothingStater.getActiveSubCategoryId
    }
}