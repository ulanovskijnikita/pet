import { ProductCategoryId } from "../../../domain/model/product/ProductCategory"
import { observer } from "mobx-react-lite"

type ProductMenuProps = {

    category: Array<{

        id: number
        name: string
    }>

    activeId: ProductCategoryId

    setActiveId: (id: ProductCategoryId) => void
}

const ProductMenu = observer((props: ProductMenuProps) => {

    return (

        <ul className="flex gap-[50px]">

            {

                props.category.map(

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
    )
})

export default ProductMenu