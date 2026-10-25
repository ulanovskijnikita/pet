
import { observer } from "mobx-react-lite";
import Location from "../../../app/router/Location";
import Shopping from "../../../widgets/shopping/ui/Shopping";

const Shop = () => {

    return (

        <Location>

            <Shopping />
        </Location>
    )
}

export default observer(Shop)