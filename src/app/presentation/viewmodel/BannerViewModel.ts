import { makeAutoObservable } from "mobx";
import NavStater from "./navViewModel/NavStater";

export default class BannerViewModel {

    constructor(

        private navStater: NavStater,
    ) {

        makeAutoObservable(this)
    }

    get getTag() {

        return this.navStater.getTag
    }
}