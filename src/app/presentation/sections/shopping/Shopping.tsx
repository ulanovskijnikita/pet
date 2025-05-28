import { observer } from "mobx-react-lite";
import container from "../../../di/container";
import ShopViewModel from "../../viewmodel/ShopViewModel";
import AppViewModel from "../../../AppViewModel";
import { useEffect } from "react";
import ProductMenu from "../../ui/ProductMenu";
import Carts from "../../ui/Carts";
import shoppingCategory from "./shoppingCategory";
import shoppingSubcategory from "./shoppingSubcategory";
import { DEFAULT_LIMIT } from "../../constants/defaultLimit";
import InfiniteScroll from "react-infinite-scroll-component";
import { DEFAULT_OFFSET } from "../../constants/defaultOffset";
import Filter from "../../ui/filter/Filter";
import shoppingOrderArr from "./shoppingOrderArr";
import { useParams } from "react-router";
import { DEFAULT_USER_ID } from "../../../../domain/model/user/User";
import { runInAction } from "mobx";

const Shopping = observer(() => {

    const vm = container.get(ShopViewModel)

    const appVm = container.get(AppViewModel)

    const { productTag } = useParams()

    useEffect(
    
        () => {

            runInAction(

                () => {

                    appVm.setSearchTag = productTag ?? ''

                    vm.setProduct = {

                        categoryId: vm.getCategory,
                        limit: DEFAULT_LIMIT,
                        offset: DEFAULT_OFFSET,
                        order: vm.getOrder,
                        subcategoryId: vm.getSubcategory,
                        tag: productTag ?? '',
                        userId: appVm.getUser?.id ?? DEFAULT_USER_ID
                    }
                }
            )
        }, [vm, appVm, appVm.getUser, appVm.getSearchTag, vm.getOrder, productTag, vm.getCategory, vm.getSubcategory]
    )

    return (

        <section className="grid px-container gap-[30px] laptop:px-container-1024">

            <h3 className="capitalize">Pet shopping</h3>

            <menu className="grid gap-[30px] laptop:gap-[50px] tablet:grid-cols-2">

                <div className="tablet:col-span-2">

                    <ProductMenu

                        activeId={vm.getCategory}
                        setActiveId={(id) => vm.setCategory = id}
                        category={shoppingCategory}
                    />
                </div>

                <div>

                    <ProductMenu
                    
                        activeId={vm.getSubcategory}
                        setActiveId={(id) => vm.setSubcategory = id}
                        category={shoppingSubcategory}
                    />
                </div>
                
                <div className="tablet:justify-self-end">

                    <Filter

                        activeOrder={vm.getOrder}
                        orderArr={shoppingOrderArr}
                        setActiveOrder={(id) => vm.setOrder = id}
                    />
                </div>
                
            </menu>
            
            <InfiniteScroll

                className="p-[.5px] tablet:p-[1px] grid gap-[30px] laptop:gap-[50px]"
                dataLength={vm.getProduct?.length ?? 0}
                hasMore={vm.getHasMoreProduct}
                loader={<h4>A little more...</h4>}
                next={

                    () => {

                        vm.setProduct = {

                            categoryId: vm.getCategory,
                            limit: DEFAULT_LIMIT,
                            offset: vm.getProduct?.length ?? DEFAULT_OFFSET,
                            order: vm.getOrder,
                            subcategoryId: vm.getSubcategory,
                            tag: productTag ?? '',
                            userId: appVm.getUser?.id ?? DEFAULT_USER_ID
                        }
                    }
                }
            >

                <Carts

                    products={vm.getProduct ?? []}
                    toggleFavourite={(param) => appVm.toggleFavouriteProduct = param}
                />
            </InfiniteScroll>
        </section>
    )
})

export default Shopping