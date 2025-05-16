import { observer } from "mobx-react-lite"

type FuncButtonProps = {

    children: string
    handleClick: () => void
}

const FuncButton = observer((props: FuncButtonProps) => {

    return (
        
        <button onClick={props.handleClick} className="px-[32px] leading-[12px] tablet:leading-[16px] py-[20px] pb-[16px] cursor-pointer rounded-btn outline-[1px] uppercase outline-[rgba(65,64,62,20)]">

            <span>{props.children}</span>
        </button>
    )
})

export default FuncButton