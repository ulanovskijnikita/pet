
import { observer } from "mobx-react-lite";
import Location from "../router/Location";
import Shopping from "../sections/shopping/Shopping";

const Shop = () => {

    return (

        <Location>

            <Shopping />
        </Location>
    )
}

export default observer(Shop)