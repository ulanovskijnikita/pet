import { observer } from "mobx-react-lite";
import ProductMenu from "../../ui/ProductMenu";
import FoodiesViewModel from "../../viewmodel/FoodiesViewModel";
import foodiesSubCategory from "./foodiesSubCategory";
import Carts from "../../ui/Carts";
import LinkButton from "../../ui/LinkButton";
import pages from "../../router/pages";
import { useInjection } from "../../context/InversifyContext";
import { useEffect } from "react";

const Foodies = observer(() => {

    const vm = useInjection(FoodiesViewModel)

    useEffect(() => {
    
        vm.setFoodies()
    }, [vm, vm.getActiveSubCategoryId])

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

                    <LinkButton linkTo={pages.shop + '/' + vm.getTag} linkText="shop all" />
                </div>
            </menu>

            <Carts

                toggleFavourite={(id, index) => vm.toggleFavourite(id, index)}
                product={vm.getFoodies}
                hasMore={false}
                addToCart={(id) => vm.addToUserCart = id}
                setProduct={() => vm.setFoodies()}
                altTitle={"No products found with parametrs"}
            />
        </section>
    )
})

export default Foodies