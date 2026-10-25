import { ReactNode } from "react"
import { observer } from "mobx-react-lite"

type FormProps = {

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
        </form>
    )
})

export default Form