import { observer } from "mobx-react-lite";
import Location from "../../router/Location";
import Footer from "../ui/footer/Footer";
import Nav from "../ui/nav/Nav";
import Shopping from "../sections/shopping/Shopping";
import container from "../../di/container";
import ShopViewModel from "../viewmodel/ShopViewModel";

const Shop = observer(() => {

    const vm = container.get(ShopViewModel)

    return (

        <Location>
            
            <header>

                <Nav />
            </header>

            <main className="grow my-[50px] tablet:my-[75px] laptop:my-[100px]">

                <Shopping />
            </main>

            {
                
                !vm.getHasMoreProduct && <Footer />
            }
        </Location>
    )
})

export default Shop