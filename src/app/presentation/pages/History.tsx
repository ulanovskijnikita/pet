import { observer } from "mobx-react-lite";
import Location from "../router/Location";
import { Outlet, useParams } from "react-router";
import Historizing from "../sections/Historizing";

const History = () => {

    const { orderId } = useParams()

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