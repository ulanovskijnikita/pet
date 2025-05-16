import { observer } from "mobx-react-lite";
import container from "../../../di/container";
import ProductMenu from "../../ui/ProductMenu";
import ClothingViewModel from "../../viewmodel/ClothingViewModel";
import clothingSubCategory from "./clothingSubCategory";
import Carts from "../../ui/Carts";
import { useEffect } from "react";
import { DEFAULT_LIMIT_OVERVIEW } from "../../constants/defaultLimit";
import { CLOTHING } from "../../../../domain/model/product/ProductCategory";
import { DEFAULT_OFFSET } from "../../constants/defaultOffset";
import AppViewModel from "../../../AppViewModel";
import { DEFAULT_USER_ID } from "../../../../domain/model/user/User";

const Clothing = observer(() => {

    const vm = container.get(ClothingViewModel)

    const appVm = container.get(AppViewModel)

    useEffect(

        () => {
            vm.setClothing = {

                categoryId: CLOTHING.id,
                limit: DEFAULT_LIMIT_OVERVIEW,
                offset: DEFAULT_OFFSET,
                subcategoryId: vm.getActiveSubCategoryId,
                userId: appVm.getUser?.id ?? DEFAULT_USER_ID
            }
        }, [vm, vm.getActiveSubCategoryId, appVm, appVm.getUser]
    )
    
    return (

        <section className="grid px-container gap-[30px] laptop:px-container-1024">

            <ProductMenu subCategories={clothingSubCategory} activeId={vm.getActiveSubCategoryId} setActiveId={(id) => vm.setActiveSubCategoryId = id} >

                Pet Clothing
            </ProductMenu>

            <Carts toggleFavourite={(param) => appVm.toggleFavouriteProduct = param} products={vm.getClothing} />
        </section>
    )
})

export default Clothing