import { makeAutoObservable } from "mobx";
import NavStater from "../../nav/model/NavStater";
import AppStater from "../../../app/model/AppStater";

export default class FooterViewModel {

    constructor(

        private navStater: NavStater,
        private appStater: AppStater,
    ) {

        makeAutoObservable(this)
    }

    get getUserId() {

        return this.appStater.getUserId
    }

    get getSearchTag() {

        return this.navStater.getTag
    }
}