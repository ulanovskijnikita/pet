import { observer } from "mobx-react-lite"
import { ProductSubcategoryId } from "../../entities/product/model/ProductSubcategory"

type ProductMenuItem =
    | { id: ProductSubcategoryId; name: string; value?: never }
    | { id: ProductSubcategoryId; value: string; name?: never }

type ProductMenuProps = {

    activeId: ProductSubcategoryId
    setActiveSubCategory: (id: ProductSubcategoryId) => void
    subCategories: ProductMenuItem[]
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

                                    props.setActiveSubCategory(subCategory.id)
                                }
                            }
                        >

                            <span className="text-btn uppercase">{"value" in subCategory ? subCategory.value : subCategory.name}</span>
                        </li>
                )
            }
        </ul>
    )
})

export default ProductMenu