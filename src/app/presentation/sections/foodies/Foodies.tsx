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
import LinkButton from "../../ui/LinkButton";
import pages from "../../../router/pages";

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
        }, [vm, vm.getActiveSubCategoryId, appVm, appVm.getUser, appVm.getSearchTag]
    )

    return (

        <section className="grid px-container gap-[30px] laptop:px-container-1024">

            <h3 className="capitalize">Pet foodies</h3>

            <menu className="grid gap-[30px] laptop:gap-0 tablet:grid-cols-2 desktop:flex desktop:justify-between">
                
                <ProductMenu

                    activeId={vm.getActiveSubCategoryId}
                    setActiveId={(id) => vm.setActiveSubCategoryId = id}
                    category={foodiesSubCategory}
                />

                <div className="tablet:justify-self-end">

                    <LinkButton linkTo={pages.shop + '/' + appVm.getSearchTag} linkText="shop all" />
                </div>
            </menu>

            <Carts

                products={vm.getFoodies}
                toggleFavourite={(param) => appVm.toggleFavouriteProduct = param}
            />
        </section>
    )
})

export default Foodies