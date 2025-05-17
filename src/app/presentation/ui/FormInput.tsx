import { RefObject } from "react"

type FormInputProps = {

    inputType: string
    inputPlaceholder: string
    inputRef: RefObject<HTMLInputElement>
}

const FormInput = (props: FormInputProps) => {

    return (

        <input
            required={true}
            ref={props.inputRef}
            placeholder={props.inputPlaceholder}
            type={props.inputType}
            className="py-[16px] pl-[20px] bg-bg text-main outline-1 focus:outline-[2px] outline-main-light text-label font-functional rounded-btn w-full"
        />
    )
}

export default FormInput