import { observer } from "mobx-react-lite";
import ShoppingViewModel from "../model/ShoppingViewModel";
import { useEffect, useLayoutEffect } from "react";
import ProductMenu from "../../../shared/ui/ProductMenu";
import Cards from "../../../shared/ui/Cards";
import shoppingCategory from "../const/shoppingCategory";
import shoppingSubcategory from "../const/shoppingSubcategory";
import Filter from "../../../shared/ui/Filter";
import shoppingOrderArr from "../const/shoppingOrderArr";
import { useParams } from "react-router";
import { runInAction } from "mobx";
import useInjection from "../../../shared/context/inversify/useInjection";

const Shopping = () => {

    const vm = useInjection(ShoppingViewModel)

    const { productTag } = useParams()

    useEffect(
    
        () => {

            runInAction(

                () => {

                    vm.setTag = productTag ?? ''

                    vm.unsetProduct()

                    vm.setProduct()
                }
            )
        }, [vm, vm.getOrder, productTag, vm.getCategory, vm.getSubcategory, vm.getTag,]
    )

    useLayoutEffect(
    
        () => {

            vm.unsetProduct()
        }, [vm, vm.getOrder, productTag, vm.getCategory, vm.getSubcategory, vm.getTag]
    )

    return (

        <section className="grid px-container gap-[30px] laptop:gap-[50px] desktop:gap-[75px] laptop:px-container-1024">

            <h3 className="capitalize">Pet shopping</h3>

            <menu className="grid gap-[30px] laptop:gap-[50px] tablet:grid-cols-2">

                <div className="tablet:col-span-2">

                    <ProductMenu

                        activeId={vm.getCategory}
                        setActiveSubCategory={(id) => vm.setCategory = id}
                        subCategories={shoppingCategory}
                    />
                </div>

                <div>

                    <ProductMenu
                    
                        activeId={vm.getSubcategory}
                        setActiveSubCategory={(id) => vm.setSubcategory = id}
                        subCategories={shoppingSubcategory}
                    />
                </div>
                
                <div className="tablet:justify-self-end">

                    <Filter

                        activeOrderId={vm.getOrder}
                        orderArr={shoppingOrderArr}
                        setActiveOrder={(id) => vm.setOrder = id}
                    />
                </div>
            </menu>

            <Cards
            
                setProduct={() => vm.setProduct()}
                altTitle={"No products found with parametrs"}
                addToCart={(id) => vm.addToUserCart = id}
                hasMore={vm.getHasMoreProduct}
                products={vm.getProduct}
                toggleFavourite={(id, index) => {

                    vm.toggleFavourite(id, index)
                }}
            />
        </section>
    )
}

export default observer(Shopping)