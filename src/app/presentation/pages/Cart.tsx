import { observer } from "mobx-react-lite"
import Location from "../router/Location"
import CartItems from "../ui/CartItems"
import CartViewModel from "../viewmodel/CartViewModel"
import { useEffect } from "react"
import FuncButton from "../ui/FuncButton"
import { useNavigate } from "react-router"
import pages from "../router/pages"
import { runInAction } from "mobx"
import useInjection from "../context/inversify/useInjection"
import Loader from "../ui/Loader"

const Cart = () => {

    const vm = useInjection(CartViewModel)

    const navigate = useNavigate()

    useEffect(

        () => {

            vm.setUserCart()
        }, [vm, navigate]
    )

    return (

        <Location>

            <section className="grid gap-[30px] px-container laptop:px-container-1024">
                
                <h3 className="capitalize">your cart</h3>

                {

                    !vm.getUserCart && <Loader />
                }

                {

                    vm.getUserCart && vm.getUserCart.length
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

                                                vm.setAnOrder()

                                                vm.setUserCart()
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
                                    vm.getCartPrice?.toFixed(2)
                                }
                            </h4>
                        </div>
                    </>
                        :
                    <h4>You have no products in the cart</h4>
                }
            </section>
        </Location>
    )
}

export default observer(Cart)