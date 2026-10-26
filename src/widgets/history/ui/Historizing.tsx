import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link, useParams } from "react-router";
import HistorizingViewModel from "../model/HistorizingViewModel";
import useInjection from "../../../shared/context/inversify/useInjection";
import Loader from "../../../shared/ui/Loader";

const Historizing = () => {

    const vm = useInjection(HistorizingViewModel)

    const { userId } = useParams()

    useEffect(

        () => {

            if( userId ) vm.setHistory( +userId )
        }, [vm, userId]
    )

    return (

        <section className="grid gap-[40px] px-container laptop:px-container-1024">

            {

                !vm.getHistory && <Loader />
            }

            {

                vm.getHistory && <>
                
                    {

                        vm.getHistory.length
                    ?
                        vm.getHistory.map(

                            (historyItem) => {

                                return (
                                    
                                    <div className="grid gap-[40px]" key={`cart-${historyItem.id}`}>

                                        <Link

                                            to={historyItem.id.toString()}
                                            className="flex gap-[15px] h-[70px]"
                                        >

                                            <div className="w-[90px] tablet:w-[150px] flex items-center">

                                                <h4>{historyItem.status}</h4>
                                            </div>

                                            <ul className="flex flex-col gap-[10px] grow justify-center">
                                        
                                                {

                                                    historyItem.products.slice(0,2).map(

                                                        (item) => {

                                                            return (

                                                                <li key={`cart-${historyItem.id}-product-${item.product.id}`} className="flex items-center">

                                                                    <div className="grow h-[12px]">{item.product.tag}</div>

                                                                    <div className="w-[20px] h-[13px] tablet:h-[13px] laptop:h-[18px] flex place-content-center">✖</div>

                                                                    <div className="font-functional w-[20px] tablet:w-[40px] laptop:w-[80px] text-end">{item.q}</div>
                                                                </li>
                                                            )
                                                        }
                                                    )
                                                }

                                                {

                                                    historyItem.products.length > 2 && <li>...</li>
                                                }
                                            </ul>

                                            <div className="w-[90px] laptop:w-[150px] flex items-center justify-end">

                                                <h4 className="text-end text-accent font-light font-functional">${historyItem.price.toFixed(2)}</h4>
                                            </div>
                                        </Link>

                                        <div className="w-full h-[1px] mx-auto laptop:mx-0 bg-[#D9D9D8]"></div>
                                    </div>
                                )
                            }
                        )
                            :
                        <h4>You have no order's history</h4>
                    }
                </>
            }
        </section>
    )
}

export default observer(Historizing)