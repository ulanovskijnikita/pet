import { observer } from "mobx-react-lite";
import UserHistory from "../../../domain/model/user/UserHistory";
import { UserId } from "../../../domain/model/user/User";
import { useEffect } from "react";
import { Link } from "react-router";

type HistoryListProps = {

    list: () => UserHistory[]
    getList: (id: UserId) => UserId
    id: UserId
}

const HistoryList = observer((props: HistoryListProps) => {

    useEffect(

        () => {

            props.getList(props.id)
        }, [props]
    )

    return (

        <section className="grid gap-[40px]">

            {

                props.list().length
                    ?
                props.list().map(

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

                                            historyItem.productList.slice(0,2).map(

                                                (product) => {

                                                    return (

                                                        <li key={`cart-${historyItem.id}-product-${product.id}`} className="flex items-center">

                                                            <div className="grow h-[12px]">{product.tag}</div>

                                                            <div className="w-[20px] h-[13px] tablet:h-[13px] laptop:h-[18px] flex place-content-center">✖</div>

                                                            <div className="font-functional w-[20px] tablet:w-[40px] laptop:w-[80px] text-end">{product.q}</div>
                                                        </li>
                                                    )
                                                }
                                            )
                                        }

                                        {

                                            historyItem.productList.length > 2
                                                ?
                                            <li>...</li>
                                                :
                                            <></>
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
        </section>
    )
})

export default HistoryList