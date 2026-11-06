import { makeAutoObservable } from "mobx";
import AppStater from "../../../app/model/AppStater";

export default class HistoryViewModel {

    constructor(

        private appStater: AppStater,
    ) {

        makeAutoObservable( this )
    }

    get getUserId() {

        return this.appStater.getUserId
    }
}