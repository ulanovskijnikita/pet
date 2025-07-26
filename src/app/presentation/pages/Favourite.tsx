import { observer } from "mobx-react-lite"
import Location from "../router/Location"
import Carts from "../ui/Carts"
import FavouriteViewModel from "../viewmodel/FavouriteViewModel"
import { useEffect, useLayoutEffect } from "react"
import { useInjection } from "../context/InversifyContext"
import { runInAction } from "mobx"

const Favourite = () => {

    const vm = useInjection(FavouriteViewModel)

    useEffect(() => {

        runInAction(() => {

            vm.setProduct()
        })
    }, [vm])

    useLayoutEffect(() => {
    
        vm.unsetProduct()
    }, [vm])

    return (

        <Location>

            <section className="grid gap-[30px] px-container laptop:px-container-1024">

                <h3 className="capitalize">your favourite</h3>

                <Carts

                    product={vm.getProduct}
                    toggleFavourite={(id, index) => {

                        vm.toggleFavourite(id, index)
                    }}
                    hasMore={vm.getHasMoreProduct}
                    addToCart={(id) => vm.addToUserCart = id}
                    setProduct={() => vm.setProduct()}
                    altTitle="You have no favourite products"
                />            
            </section>
        </Location>
    )
}

export default observer(Favourite)