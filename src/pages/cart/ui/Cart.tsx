import { observer } from "mobx-react-lite"
import Location from "../../../app/router/Location"
import CartViewModel from "../model/CartViewModel"
import FuncButton from "../../../shared/ui/FuncButton"
import { useNavigate } from "react-router"
import pages from "../../../app/router/pages"
import { runInAction } from "mobx"
import useInjection from "../../../shared/context/inversify/useInjection"
import Loader from "../../../shared/ui/Loader"
import CartItem from "./CartItem"

const Cart = () => {

    const vm = useInjection(CartViewModel)

    const navigate = useNavigate()

    return (

        <Location>

            <section className="grid gap-[30px] px-container laptop:px-container-1024">
                
                <h3 className="capitalize">your cart</h3>

                {

                    !vm.getCart && <Loader />
                }

                {

                    vm.getCart && <>
                    
                        {

                            vm.getCart.cartLength ? <>

                                <ul className="grid gap-[20px]">
                    
                                    {

                                        vm.getCart.products.map( 

                                            (item, index) =>
                                                <CartItem

                                                    q={item.q}
                                                    key={item.product.id}
                                                    product={item.product}
                                                    productIndex={index}
                                                    changeQuantityCartProduct={(quantity) => vm.setProductQuantity = quantity}
                                                    setQuantityCartProduct={(quantity) => vm.setProductQuantity = quantity}
                                                    toggleFavourite={(productId) => vm.toggleFavourite(productId, index)}
                                                />
                                        )
                                    }
                                </ul>

                                <div className="w-full h-[1px] mx-auto laptop:mx-0 bg-[#D9D9D8]"></div>

                                <div className="flex justify-between items-end tablet:flex-col-reverse tablet:gap-[5px] laptop:gap-[15px]">

                                    <FuncButton

                                        handleClick={

                                            () => {

                                                runInAction(

                                                    () => {

                                                        vm.makeOrder()
                                                    }
                                                )
                                                
                                                navigate(`${pages.history}/${vm.getUserId}`)
                                            }
                                        }>

                                            <span>get an order</span>
                                    </FuncButton>

                                    <h4 className="text-accent font-functional font-light">

                                        $

                                        {

                                            vm.getCart.price
                                        }
                                    </h4>
                                </div>
                            </> : <h4>You have no products in the cart</h4>
                        }
                    </> 
                }
            </section>
        </Location>
    )
}

export default observer(Cart)