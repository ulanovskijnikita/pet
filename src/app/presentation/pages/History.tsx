import { observer } from "mobx-react-lite";
import Location from "../../router/Location";
import Nav from "../ui/nav/Nav";
import Footer from "../ui/footer/Footer";
import { useParams } from "react-router";
import HistoryList from "../sections/HistoryList";
import HistoryCurrent from "../sections/HistoryCurrent";
import container from "../../di/container";
import AppViewModel from "../../AppViewModel";
import HistoryViewModel from "../viewmodel/HistoryViewModel";
import { DEFAULT_USER_ID } from "../../../domain/model/user/User";
import { useLayoutEffect } from "react";

const History = observer(() => {

    const { cartId } = useParams()

    const appVm = container.get(AppViewModel)

    const vm = container.get(HistoryViewModel)

    useLayoutEffect(

        () => {

            vm.setProductsHistory = null
        }, [cartId, appVm, vm]
    )

    return (

        <Location>

            <header>

                <Nav />
            </header>

            <main className="grow px-container laptop:px-container-1024 my-[50px] laptop:my-[100px]">

                {

                    !cartId
                        ?
                    <HistoryList

                        list={() => vm.getUserHistoryList}
                        getList={(id) => vm.setUserHistoryList = id}
                        id={appVm.getUser?.id ?? DEFAULT_USER_ID}
                    />
                        :
                    <HistoryCurrent
                    
                        list={() => vm.getProductsHistory}
                        getList={(param) => vm.setProductsHistory = param}
                        cartId={+cartId}
                        setRating={(param) => vm.setProductRating = param}
                    />
                }
            </main>

            <Footer />
        </Location>
    )
})

export default History