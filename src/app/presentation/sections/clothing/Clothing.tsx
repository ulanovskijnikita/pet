import { observer } from "mobx-react-lite";
import ProductMenu from "../../ui/ProductMenu";
import ClothingViewModel from "../../viewmodel/ClothingViewModel";
import clothingSubCategory from "./clothingSubCategory";
import Cards from "../../ui/Cards";
import LinkButton from "../../ui/LinkButton";
import pages from "../../router/pages";
import { useEffect } from "react";
import useInjection from "../../context/inversify/useInjection";

const Clothing = () => {

    const vm = useInjection(ClothingViewModel)

    useEffect(() => {

        vm.setClothing()
    }, [vm, vm.getActiveSubCategoryId])
    
    return (

        <section className="grid px-container gap-[30px] laptop:px-container-1024 relative">

            <h3 className="capitalize">Pet clothing</h3>

            <menu className="grid gap-[30px] laptop:gap-0 tablet:grid-cols-2 desktop:flex desktop:justify-between">

                <ProductMenu

                    category={clothingSubCategory}
                    activeId={vm.getActiveSubCategoryId}
                    setActiveId={(id) => vm.setActiveSubCategoryId = id}
                />

                <div className="tablet:justify-self-end">

                    <LinkButton linkTo={pages.shop + '/' + vm.getTag} linkText="shop all" />
                </div>
            </menu>

            <Cards

                setProduct={() => vm.setClothing()}
                altTitle={"No products found with parametrs"}
                addToCart={(id) => vm.addToUserCart = id}
                hasMore={false}
                products={vm.getClothing}
                toggleFavourite={(id, index) => {

                    vm.toggleFavourite(id, index)
                }}
            />
        </section>
    )
}

export default observer(Clothing)