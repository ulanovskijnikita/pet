import { observer } from "mobx-react-lite";
import SetQuantityCartProductParam from "../../../data/storage/model/user/SetQuantityCartProductParam";
import { useEffect, useRef } from "react";

type QuantityFormProps = {

    addQuantity: (quantity: SetQuantityCartProductParam) => SetQuantityCartProductParam
    quantityParam: SetQuantityCartProductParam
}

const QuantityForm = observer((props: QuantityFormProps) => {

    const quantityInput = useRef<HTMLInputElement>(null)

    useEffect(

        () => {

            if( quantityInput.current ) quantityInput.current.value = props.quantityParam.quantity.toString()
        }, [quantityInput, props]
    )

    return (

        <form

            onSubmit={

                (event) => {
                    
                    event.preventDefault()
                
                    props.addQuantity({

                        index: props.quantityParam.index,
                        productId: props.quantityParam.productId,
                        quantity: quantityInput.current?.value ? +quantityInput.current?.value : 0,
                        userId: props.quantityParam.userId
                    })
                }
            }
            className="w-fit"
        >

            <input

                className="w-[32px] aspect-square p-[9px] focus:outline-none text-center"
                ref={quantityInput}
                type="number"
                placeholder={props.quantityParam.quantity.toString()}
                onBlur={
                    () => {

                        props.addQuantity({

                            index: props.quantityParam.index,
                            productId: props.quantityParam.productId,
                            quantity: quantityInput.current?.value ? +quantityInput.current?.value : 0,
                            userId: props.quantityParam.userId
                        })
                    }
                }
            />
        </form>
    )
})

export default QuantityForm