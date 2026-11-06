import { observer } from "mobx-react-lite";
import Location from "../../../app/router/Location";
import { Outlet, useNavigate, useParams } from "react-router";
import Historizing from "../../../widgets/history/ui/Historizing";
import { useEffect } from "react";
import HistoryViewModel from "../model/HistoryViewModel";
import useInjection from "../../../shared/context/inversify/useInjection";
import pages from "../../../app/router/pages";

const History = () => {

    const { orderId } = useParams()

    const vm = useInjection( HistoryViewModel )

    const navigate = useNavigate()

    useEffect(() => {

        if ( !vm.getUserId ) navigate(`${pages.profile}/${pages.signIn}`)
    }, [vm.getUserId, navigate, vm, orderId])

    return (

        <Location>

            {

                !orderId
                    ?
                <Historizing />
                    :
                <Outlet />
            }
        </Location>
    )
}

export default observer(History)