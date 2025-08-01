import { useNavigate } from "react-router"
import pages from "../router/pages"
import { observer } from "mobx-react-lite"
import { useRef } from "react"
import { ProductTag } from "../../../domain/model/product/Product"

type SearchInputProps = {

    setTag(tag: ProductTag): void
}

const SearchInput = (props: SearchInputProps) => {

    const searchInput = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()

    return (

        <form
            className="p-[10px] laptop:px-[15px] laptop:py-[17px] focus-within:outline-[2px] w-[280px] laptop:w-[360px] desktop:w-[472px] flex outline-solid outline-[1px] rounded-btn justify-between outline-[#EAEAEA] gap-[15px]"
            onSubmit={

                (event) => {

                    event.preventDefault()

                    const tag = searchInput.current?.value ?? ''

                    props.setTag(tag)

                    navigate(pages.shop + '/' + tag)
                }
            }
        >

            <input
                ref={searchInput}
                className="active:border-none focus:border-none focus:outline-none active:outline-none font-functional text-main w-full laptop:pl-[10px]" 
                placeholder="Search for more than 10,000 products"
                type="search"/>

            <button title="search">

                <svg width="22" height="22" viewBox="0 0 22 22" className="hover:text-accent laptop:active:text-main active:text-accent cursor-pointer duration-300" xmlns="http://www.w3.org/2000/svg">

                    <path d="M19.6234 18.1066L15.5805 14.0637C16.5538 12.7679 17.0793 11.1906 17.0775 9.57C17.0775 5.43039 13.7096 2.0625 9.57 2.0625C5.43039 2.0625 2.0625 5.43039 2.0625 9.57C2.0625 13.7096 5.43039 17.0775 9.57 17.0775C11.1906 17.0793 12.7679 16.5538 14.0637 15.5805L18.1066 19.6234C18.3113 19.8063 18.5782 19.904 18.8526 19.8963C19.127 19.8886 19.388 19.7762 19.5821 19.5821C19.7762 19.388 19.8886 19.127 19.8963 18.8526C19.904 18.5782 19.8063 18.3113 19.6234 18.1066V18.1066ZM4.2075 9.57C4.2075 8.5094 4.52201 7.47261 5.11124 6.59076C5.70048 5.7089 6.53799 5.02157 7.51786 4.6157C8.49773 4.20982 9.57595 4.10363 10.6162 4.31054C11.6564 4.51745 12.6119 5.02818 13.3619 5.77814C14.1118 6.5281 14.6225 7.48361 14.8295 8.52383C15.0364 9.56405 14.9302 10.6423 14.5243 11.6221C14.1184 12.602 13.4311 13.4395 12.5492 14.0288C11.6674 14.618 10.6306 14.9325 9.57 14.9325C8.1483 14.9308 6.78532 14.3653 5.78002 13.36C4.77473 12.3547 4.20921 10.9917 4.2075 9.57V9.57Z" fill="currentColor"/>
                </svg>
            </button>
        </form>
    )
}

export default observer(SearchInput)