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

        <section className="grid gap-[30px]">

            {

                props.list().length
                    ?
                props.list().map(

                    (historyItem) => {

                        return (
                            
                            <Link

                                key={`cart-${historyItem.id}`}
                                to={historyItem.id.toString()}
                                className="grid grid-cols-3 justify-start last:justify-end"
                            >

                                <div>

                                    <h3>{historyItem.status}</h3>
                                </div>

                                <ul>
                            
                                    {

                                        historyItem.productList.slice(0,2).map(

                                            (product) => {

                                                return (

                                                    <li key={`cart-${historyItem.id}-product-${product.id}`} className="flex justify-between">

                                                        <span>{product.tag}</span>

                                                        <span>✖</span>

                                                        <span>{product.q}</span>
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

                                <div>

                                    <h4>{historyItem.price.toFixed(2)}</h4>
                                </div>
                            </Link>
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