import { observer } from "mobx-react-lite"
import SetQuantityCartProductParam from "../../../domain/model/user/SetQuantityCartProductParam"
import useInjection from "../context/inversify/useInjection"
import AppViewModel from "../viewmodel/appViewModel/AppViewModel"
import { ProductId } from "../../../domain/model/product/Product"
import { ProductQuantity } from "../../../domain/model/user/AddToUserCartParam"

type QuantityButtonProps = {

    addQuantity: (quantity: SetQuantityCartProductParam) => void
    productIndex: number
    productId: ProductId
    productQuantity: ProductQuantity
}

const QuantityButton = (props: QuantityButtonProps) => {

    const appVm = useInjection(AppViewModel)

    return (

        <button
            title="add quantity"
            className="p-[8px] h-fit rounded-btn outline-[1px] active:outline-2 outline-[rgba(65,64,62,20)] grid items-center justify-center cursor-pointer"
            onClick={
                () => {

                    props.addQuantity({

                        index: props.productIndex,
                        productId: props.productId,
                        quantity: props.productQuantity,
                        userId: appVm.getId
                    })
                }
            }
        >
            
            {

                props.productQuantity > 0
                    ?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[16px] aspect-square">

                    {/* !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                    <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                </svg>
                    :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[16px] aspect-square">
                    
                    {/* !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                    <path fill="currentColor" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                </svg>
            }
            
        </button>
    )
}

export default observer(QuantityButton)