import { makeAutoObservable } from "mobx";
import SecondStater from "./secondViewModel/SecondStater";
import AppStater from "./appViewModel/AppStater";

export default class HomeViewModel {

    constructor(

        private appStater: AppStater,
        private secondStater: SecondStater,
    ) {

        makeAutoObservable(this)
    }

    get getId() {
    
        return this.appStater.getId
    }

    setSecondId() {

        this.secondStater.setId = this.getId
    }
}