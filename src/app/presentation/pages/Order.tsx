import { observer } from "mobx-react-lite";
import { useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router";
import OrderViewModel from "../viewmodel/OrderViewModel";
import useInjection from "../context/inversify/useInjection";
import Loader from "../ui/Loader";
import OrderCard from "../ui/OrderCard";

const Order = () => {

    const vm = useInjection(OrderViewModel)

    const { orderId } = useParams()

    useEffect(() => {

        vm.setOrder = orderId ? +orderId : null
    }, [vm, orderId])

    useLayoutEffect(() => {

        vm.unsetOrder()
    }, [vm, orderId])

    return (

        <section className="grid px-container gap-[30px] laptop:px-container-1024">

            {

                !vm.getOrder && <Loader />
            }

            {

                vm.getOrder?.length

                    ?

                <ul className="w-full grid gap-[30px] tablet:gap-[32px] tablet:grid-cols-2 laptop:grid-cols-3 tablet:justify-self-center tablet:w-fit desktop:grid-cols-4 desktop:gap-[45px]">

                    {

                        vm.getOrder.map(

                            (product, productIndex) =>
                                <OrderCard

                                    addToCart={( productId ) => vm.addToCart = productId}
                                    product={product}
                                    setProductRating={(productId, productRating) => vm.setProductRating = {

                                        index: productIndex,
                                        productId: productId,
                                        rating: productRating
                                    }}
                                    toggleFavourite={(productId) => vm.toggleFavourite(productId, productIndex)}
                                    key={product.id}
                                />
                        )
                    }
                </ul>

                    :
                
                vm.getOrder && <h4>You have no order with this cart's id</h4>
            }           
        </section>
    )
}

export default observer(Order)