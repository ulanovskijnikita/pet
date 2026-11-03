import { observer } from "mobx-react-lite"
import ProductSubcategory, { ProductSubcategoryId } from "../../entities/product/model/ProductSubcategory"

type ProductMenuProps = {

    activeId: ProductSubcategoryId
    setActiveCategory: (name: string) => void
    subCategories: ProductSubcategory[]
}

const ProductMenu = observer((props: ProductMenuProps) => {

    return (

        <ul className="flex gap-[50px]">

            {

                props.subCategories.map(

                    (subCategory) =>
                        <li
                            key={subCategory.id}
                            className={

                                `tablet:self-center h-fit duration-300 pb-[10px] cursor-pointer border-b-2 ${subCategory.id === props.activeId ? "border-[#DEAD6F]" : "border-[#D9D9D8]"}`
                            }

                            onClick={
                                
                                () => {

                                    if (subCategory.id === props.activeId) return

                                    props.setActiveCategory( subCategory.value )
                                }
                            }
                        >

                            <span className="text-btn uppercase">{subCategory.value}</span>
                        </li>
                )
            }
        </ul>
    )
})

export default ProductMenu