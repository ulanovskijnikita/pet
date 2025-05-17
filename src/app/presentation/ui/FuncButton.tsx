import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router"
import container from "../../di/container"
import AppViewModel from "../../AppViewModel"
import pages from "../../router/pages"

type FuncButtonProps = {

    children: string
    handleClick: () => void
}

const FuncButton = observer((props: FuncButtonProps) => {

    const navigate = useNavigate()

    const appVm = container.get(AppViewModel)

    return (
        
        <button
            onClick={

                () => {

                    if (appVm.getUser) {

                        props.handleClick()
                    } else {

                        navigate(pages.profile + '/' + pages.signIn)
                    }                    
                }
            }
            className="px-[32px] leading-[12px] tablet:leading-[16px] py-[20px] pb-[16px] cursor-pointer rounded-btn outline-[1px] uppercase outline-[rgba(65,64,62,20)] active:outline-2"
        >

            <span>{props.children}</span>
        </button>
    )
})

export default FuncButton