import { makeAutoObservable, runInAction } from "mobx";
import CartHistory from "../../../entities/cart/model/CartHistory";
import GetCartHistoryUseCase from "../../../entities/cart/usecase/GetCartHistoryUseCase";
import HistorizingStater from "./HistorizingStater";
import Cart from "../../../shared/model/entities/Cart";
import { UserId } from "../../../shared/model/entities/User";

export default class HistorizingViewModel implements HistorizingStater {

    constructor(

        private getCartHistoryUseCase: GetCartHistoryUseCase,
    ) {

        makeAutoObservable(this)
    }

    private history: CartHistory | null = null

    get getHistory() {

        return this.history
    }

    setHistory(id: UserId) {

        this.getCartHistoryUseCase
            .execute( id )
            .then(

                (history) => {

                    runInAction(

                        () => {

                            this.history = history
                        }
                    )
                }
            )
    }

    
    addCart(cart: Cart): void {
        
        this.history?.push({

            ...cart,
        })
    }
}