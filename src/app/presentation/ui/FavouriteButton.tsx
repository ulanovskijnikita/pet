import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router"
import pages from "../../router/pages"
import { ToggleFavouriteProductParam } from "../../AppViewModel"

type FavouriteButtonProps = {

    isFavourite: boolean
    toggleFavourite: (param: ToggleFavouriteProductParam) => ToggleFavouriteProductParam
    toggleParam: ToggleFavouriteProductParam
}

const FavouriteButton = observer((props: FavouriteButtonProps) => {

    const navigate = useNavigate()

    return (

        <button
            title="to-favourite"
            className="p-[16px] tablet:p-[18px] rounded-btn outline-[1px] active:outline-2 outline-[rgba(65,64,62,20)] grid items-center justify-center cursor-pointer"
            onClick={
                () => {

                    if(props.toggleParam.userId) {
                        
                        props.toggleFavourite(props.toggleParam)
                    } else {

                        navigate(pages.profile + '/' + pages.signIn)
                    }                    
                }
            }
        >

            <svg className={`aspect-square w-[16px] block ${props.isFavourite ? 'text-accent' : 'text-main'}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            
                <path d="M14.447 3.12425C12.7345 1.76914 10.1877 2.01288 8.61584 3.51888L8.00023 4.10793L7.38462 3.51888C5.8159 2.01288 3.26595 1.76914 1.55348 3.12425C-0.408984 4.67957 -0.512107 7.47104 1.24411 9.15695L7.29087 14.9546C7.68149 15.3289 8.31585 15.3289 8.70647 14.9546L14.7532 9.15695C16.5126 7.47104 16.4094 4.67957 14.447 3.12425V3.12425Z" fill="currentColor"/>
            </svg>
        </button>
    )
})

export default FavouriteButton