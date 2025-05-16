import { observer } from "mobx-react-lite"

type FormButtonProps = {

    children: string
}

const FormButton = observer((props: FormButtonProps) => {

    return (

        <button

            onSubmit={(event) => event.preventDefault()}
            type="submit"
            className="bg-main text-bg rounded-btn py-[20px] w-full text-btn uppercase cursor-pointer duration-300 active:bg-main-light"
        >
            {props.children}
        </button>
    )
})

export default FormButton