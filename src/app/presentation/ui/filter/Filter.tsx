import { observer } from "mobx-react-lite"
import ProductOrder, { ProductOrderId } from "../../../../domain/model/product/ProductOrder"

type FilterProps = {

    activeOrder: ProductOrderId
    orderArr: ProductOrder[]
    setActiveOrder: (id: ProductOrderId) => void
}

const Filter = observer((props: FilterProps) => {

    return (

        <div

            className="flex gap-[5px] laptop:gap-[14px] items-center duration-300 hover:text-accent active:text-main cursor-pointer"
            onClick={

                () => {
                    
                    props.setActiveOrder(

                        props.activeOrder == props.orderArr.length - 1
                            ?
                        0
                            :
                        props.activeOrder + 1
                    )
                }
            }
        >
            
            <span className="text-btn capitalize">

                {props.orderArr[ props.activeOrder ].action}
            </span>
            
            <svg

                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={
                
                    (props.activeOrder & 1) === 0
                        ?
                    "rotate-0"
                        :
                    "rotate-180"
                }
            >

                <path d="M3.57737 5.32938L0.176305 2.038C-0.0587684 1.8105 -0.0587684 1.44264 0.176305 1.21757L0.741482 0.67062C0.976555 0.443127 1.35667 0.443127 1.58925 0.67062L4 3.00363L6.41075 0.67062C6.64583 0.443127 7.02595 0.443127 7.25852 0.67062L7.82369 1.21757C8.05877 1.44506 8.05877 1.81292 7.82369 2.038L4.42263 5.32938C4.19256 5.55687 3.81244 5.55687 3.57737 5.32938Z" fill="currentColor"/>
            </svg>
        </div>
    )
})

export default Filter