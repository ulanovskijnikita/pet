import { observer } from "mobx-react-lite"
import Location from "../router/Location"
import Nav from "../ui/nav/Nav"
import Footer from "../ui/footer/Footer"
import Carts from "../ui/Carts"
import container from "../../di/container"
import AppViewModel from "../../AppViewModel"
import FavouriteViewModel from "../viewmodel/FavouriteViewModel"
import { useEffect } from "react"
import { DEFAULT_USER_ID } from "../../../domain/model/user/User"
import { DEFAULT_LIMIT } from "../constants/defaultLimit"
import { DEFAULT_OFFSET } from "../constants/defaultOffset"
import InfiniteScroll from "react-infinite-scroll-component"

const Favourite = observer(() => {

    const appVm = container.get(AppViewModel)

    const vm = container.get(FavouriteViewModel)

    useEffect(

        () => {

            vm.setFavouriteProduct = {

                id: appVm.getUser?.id ?? DEFAULT_USER_ID,
                limit: DEFAULT_LIMIT,
                offset: DEFAULT_OFFSET
            }
        }, [appVm, vm, appVm.getUser]
    )

    return (

        <Location>

            <header>

                <Nav />
            </header>

            <main className="grow flex-col flex my-[50px] gap-[30px] laptop:my-[100px] px-container laptop:px-container-1024">

                <section className="grid gap-[30px]">

                    <h3 className="capitalize">your favourite</h3>

                    {

                        vm.getFavouriteProduct?.length
                            ?
                        <InfiniteScroll

                            className="p-[.5px] tablet:p-[1px] grid gap-[30px] laptop:gap-[50px]"
                            dataLength={vm.getFavouriteProduct?.length ?? 0}
                            hasMore={vm.getHasMoreProduct}
                            loader={<h4>A little more...</h4>}
                            next={

                                () => {

                                    vm.setFavouriteProduct = {

                                        limit: DEFAULT_LIMIT,
                                        offset: vm.getFavouriteProduct?.length ?? DEFAULT_OFFSET,
                                        id: appVm.getUser?.id ?? DEFAULT_USER_ID
                                    }
                                }
                            }
                        >

                            <Carts

                                products={vm.getFavouriteProduct ?? []}
                                toggleFavourite={(param) => vm.toggleFavouriteProduct = param}
                            />
                        </InfiniteScroll>
                            :
                        <h4>You have no favourite products</h4>
                    }

                    
                </section>
            </main>

            <Footer />
        </Location>
    )
})

export default Favourite