import { ReactNode } from "react"
import FormButton from "./FormButton"
import { observer } from "mobx-react-lite"

type FormProps = {

    textSubmit: string
    handleSubmit: () => void
    children: ReactNode

}

const Form = observer((props: FormProps) => {

    return (

        <form 
        
            
            onSubmit={

                (event) => {

                    event.preventDefault()

                    props.handleSubmit()
                }                
            }
            className="grid gap-[10px] w-full"
        >

            {
                props.children
            }

            <FormButton>{props.textSubmit}</FormButton>
        </form>
    )
})

export default Form