import { makeAutoObservable } from "mobx";
import NavStater from "../../nav/model/NavStater";

export default class FooterViewModel {

    constructor(

        private navStater: NavStater,
    ) {

        makeAutoObservable(this)
    }

    get getSearchTag() {

        return this.navStater.getTag
    }
}