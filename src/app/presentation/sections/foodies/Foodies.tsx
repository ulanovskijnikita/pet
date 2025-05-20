import { observer } from "mobx-react-lite";
import ProductMenu from "../../ui/ProductMenu";
import container from "../../../di/container";
import FoodiesViewModel from "../../viewmodel/FoodiesViewModel";
import foodiesSubCategory from "./foodiesSubCategory";
import Carts from "../../ui/Carts";
import AppViewModel from "../../../AppViewModel";
import { useEffect } from "react";
import { FOODIES } from "../../../../domain/model/product/ProductCategory";
import { DOUBLE_LIMIT_OVERVIEW } from "../../constants/defaultLimit";
import { DEFAULT_OFFSET } from "../../constants/defaultOffset";
import { DEFAULT_USER_ID } from "../../../../domain/model/user/User";

const Foodies = observer(() => {

    const vm = container.get(FoodiesViewModel)

    const appVm = container.get(AppViewModel)

    useEffect(
    
            () => {
                vm.setFoodies = {
    
                    categoryId: FOODIES.id,
                    limit: DOUBLE_LIMIT_OVERVIEW,
                    offset: DEFAULT_OFFSET,
                    subcategoryId: vm.getActiveSubCategoryId,
                    userId: appVm.getUser?.id ?? DEFAULT_USER_ID
                }
            }, [vm, vm.getActiveSubCategoryId, appVm, appVm.getUser]
        )

    return (

        <section className="grid px-container gap-[30px] laptop:px-container-1024">

            <ProductMenu

                activeId={vm.getActiveSubCategoryId}
                setActiveId={(id) => vm.setActiveSubCategoryId = id}
                subCategories={foodiesSubCategory}
            >

                Pet Foodies
            </ProductMenu>

            <Carts

                products={vm.getFoodies}
                toggleFavourite={(param) => appVm.toggleFavouriteProduct = param}
            />
        </section>
    )
})

export default Foodies