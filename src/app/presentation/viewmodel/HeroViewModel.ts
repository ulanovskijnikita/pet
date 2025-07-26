import { makeAutoObservable } from "mobx";
import NavStater from "./navViewModel/NavStater";

export default class HeroViewModel {

    constructor(

        private navStater: NavStater
    ) {

        makeAutoObservable(this)
    }

    get getSearchTag() {

        return this.navStater.getTag
    }
}