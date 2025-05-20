import { observer } from "mobx-react-lite";
import { RefObject } from "react";

type FormTextareaProps = {

    placeholder: string
    inputRef: RefObject<HTMLTextAreaElement>
}

const FormTextarea = observer((props: FormTextareaProps) => {

    return (

        <textarea required={true} ref={props.inputRef} placeholder={props.placeholder} className="py-[16px] pl-[20px] bg-bg text-main outline-1 focus:outline-[2px] outline-main-light text-label font-functional rounded-btn w-full"></textarea>
    )
})

export default FormTextarea