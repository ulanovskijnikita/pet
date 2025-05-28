import { observer } from "mobx-react-lite";
import Location from "../../router/Location";
import Footer from "../ui/footer/Footer";
import Nav from "../ui/nav/Nav";
import Shopping from "../sections/shopping/Shopping";

const Shop = observer(() => {

    return (

        <Location>
            
            <header>

                <Nav />
            </header>

            <main className="grow my-[50px] tablet:my-[75px] laptop:my-[100px]">

                <Shopping />
            </main>

            <Footer />
        </Location>
    )
})

export default Shop