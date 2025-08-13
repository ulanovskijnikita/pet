import { observer } from "mobx-react-lite";
import SetQuantityCartProductParam from "../../../domain/model/user/SetQuantityCartProductParam";
import { useEffect, useRef } from "react";
import useInjection from "../context/inversify/useInjection";
import AppViewModel from "../viewmodel/appViewModel/AppViewModel";
import { ProductId } from "../../../domain/model/product/Product";
import { ProductQuantity } from "../../../domain/model/user/AddToUserCartParam";

type QuantityFormProps = {

    addQuantity: (quantity: SetQuantityCartProductParam) => void
    productIndex: number
    productId: ProductId
    productQuantity: ProductQuantity
}

const QuantityForm = (props: QuantityFormProps) => {

    const appVm = useInjection(AppViewModel)

    const quantityInput = useRef<HTMLInputElement>(null)

    useEffect(

        () => {

            if( quantityInput.current ) quantityInput.current.value = props.productQuantity.toString()
        }, [quantityInput, props, props.productQuantity, appVm]
    )

    return (

        <form

            onSubmit={

                (event) => {
                    
                    event.preventDefault()
                
                    props.addQuantity({

                        index: props.productIndex,
                        productId: props.productId,
                        quantity: quantityInput.current?.value ? +quantityInput.current?.value : 0,
                        userId: appVm.getId
                    })
                }
            }
            className="w-fit"
        >

            <input

                className="w-[40px] aspect-square p-[9px] focus:outline-none text-center"
                ref={quantityInput}
                type="number"
                placeholder={props.productQuantity.toString()}
                onBlur={
                    () => {

                        props.addQuantity({

                            index: props.productIndex,
                            productId: props.productId,
                            quantity: quantityInput.current?.value ? +quantityInput.current?.value : 0,
                            userId: appVm.getId
                        })
                    }
                }
            />
        </form>
    )
}

export default observer(QuantityForm)