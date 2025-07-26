import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router"
import AppViewModel from "../viewmodel/appViewModel/AppViewModel"
import pages from "../router/pages"
import { useInjection } from "../context/InversifyContext"

type FuncButtonProps = {

    children: JSX.Element
    handleClick: () => void
}

const FuncButton = (props: FuncButtonProps) => {

    const navigate = useNavigate()

    const appVm = useInjection(AppViewModel)

    return (
        
        <button
            onClick={

                () => {

                    if (appVm.getId) {

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
}

export default observer(FuncButton)