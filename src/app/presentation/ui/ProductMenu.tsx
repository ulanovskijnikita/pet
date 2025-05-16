import { ReactNode } from "react"
import LinkButton from "./LinkButton"
import { ProductCategoryId } from "../../../domain/model/product/ProductCategory"
import { observer } from "mobx-react-lite"
import pages from "../../router/pages"

type ProductMenuProps = {

    children: ReactNode

    subCategories: Array<{

        id: number
        name: string
    }>

    activeId: ProductCategoryId

    setActiveId: (id: ProductCategoryId) => void
}

const ProductMenu = observer((props: ProductMenuProps) => {

    return (

        <menu className="grid gap-[30px] laptop:gap-0 tablet:grid-cols-2 desktop:flex desktop:justify-between">

            <h3 className="tablet:col-span-2">{props.children}</h3>

            <ul className="flex gap-[50px] tablet:col-span-1">

                {
                    props.subCategories.map(

                        (value) =>
                            <li 
                                key={value.id}
                                className={
                                    `tablet:self-center h-fit duration-300 pb-[10px] cursor-pointer border-b-2 ${props.activeId == value.id ? "border-[#DEAD6F]" : "border-[#D9D9D8]"}`
                                }

                                onClick={
                                    () => props.setActiveId(value.id)
                                }
                            >

                                <span className="text-btn uppercase">{value.name}</span>
                            </li>
                    )
                }
            </ul>
            <div className="tablet:justify-self-end">
                <LinkButton linkTo={pages.shop} linkText="shop all" />
            </div>
            
        </menu>
    )
})

export default ProductMenu