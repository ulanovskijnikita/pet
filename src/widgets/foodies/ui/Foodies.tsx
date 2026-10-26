import { observer } from "mobx-react-lite";
import FoodiesViewModel from "../model/FoodiesViewModel";
import Cards from "../../../shared/ui/Cards";
import LinkButton from "../../../shared/ui/LinkButton";
import pages from "../../../app/router/pages";
import { useEffect } from "react";
import useInjection from "../../../shared/context/inversify/useInjection";
import ProductMenu from "../../../shared/ui/ProductMenu";
import foodiesSubcategory from "../../../entities/product/const/foodiesSubcategory";

const Foodies = observer(() => {

    const vm = useInjection(FoodiesViewModel)

    useEffect(() => {

        vm.setFoodies()
    }, [vm, vm.getActiveSubCategoryId])

    return (

        <section className="grid px-container gap-[30px] laptop:px-container-1024 relative">

            <h3 className="capitalize">Pet foodies</h3>

            <menu className="grid gap-[30px] laptop:gap-0 tablet:grid-cols-2 desktop:flex desktop:justify-between">
                
                <ProductMenu

                    activeId={vm.getActiveSubCategoryId}
                    setActiveSubCategory={(id) => vm.setActiveSubCategoryId = id}
                    subCategories={foodiesSubcategory}
                />

                <div className="tablet:justify-self-end">

                    <LinkButton linkTo={pages.shop + '/' + vm.getTag} linkText="shop all" />
                </div>
            </menu>

            <Cards

                toggleFavourite={(id, index) => vm.toggleFavourite(id, index)}
                products={vm.getFoodies}
                hasMore={false}
                addToCart={(id) => vm.addToUserCart = id}
                setProduct={() => vm.setFoodies()}
                altTitle={"No products found with parametrs"}
            />
        </section>
    )
})

export default Foodies