import { observer } from "mobx-react-lite"
import Nav from "../ui/nav/Nav"
import Location from "../../router/Location"
import Footer from "../ui/footer/Footer"
import CartItems from "../ui/CartItems"
import container from "../../di/container"
import CartViewModel from "../viewmodel/CartViewModel"
import { useEffect } from "react"
import AppViewModel from "../../AppViewModel"
import { DEFAULT_USER_ID } from "../../../domain/model/user/User"
import FuncButton from "../ui/FuncButton"
import { useNavigate } from "react-router"
import pages from "../../router/pages"
import { runInAction } from "mobx"

const Cart = observer(() => {

    const appVm = container.get(AppViewModel)

    const vm = container.get(CartViewModel)

    const navigate = useNavigate()

    useEffect(

        () => {

            vm.setUserCart = appVm.getUser?.id ?? DEFAULT_USER_ID
        }, [vm, appVm, appVm.getUser, navigate]
    )

    return (

        <Location>

            <header>

                <Nav />
            </header>

            <main className="grow flex-col flex my-[50px] gap-[30px] laptop:my-[100px] px-container laptop:px-container-1024">

                <h3 className="capitalize">your cart</h3>

                {

                    vm.getUserCart.length
                        ?
                    <>
                
                        <CartItems products={vm.getUserCart} />

                        <div className="w-full h-[1px] mx-auto laptop:mx-0 bg-[#D9D9D8]"></div>

                        <div className="flex justify-between items-end tablet:flex-col-reverse tablet:gap-[5px] laptop:gap-[15px]">

                            <FuncButton

                                handleClick={

                                    () => {

                                        runInAction(

                                            () => {

                                                vm.setAnOrder = appVm.getUser?.id ?? DEFAULT_USER_ID

                                                vm.setUserCart = appVm.getUser?.id ?? DEFAULT_USER_ID
                                            }
                                        )

                                        navigate(pages.history)
                                    }
                                }>

                                    <span>get an order</span>
                            </FuncButton>

                            <h4 className="text-accent font-functional font-light">

                                {

                                    vm.getUserCart[0] && vm.getUserCart[0].priceCurrency 
                                        +
                                    vm.getCartPrice.toFixed(2)
                                }
                            </h4>
                        </div>
                    </>
                        :
                    <h4>You have no products in the cart</h4>
                }
            </main>

            <Footer />
        </Location>
    )
})

export default Cart