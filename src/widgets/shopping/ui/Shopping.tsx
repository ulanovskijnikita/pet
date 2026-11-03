import { observer } from "mobx-react-lite";
import ShoppingViewModel from "../model/ShoppingViewModel";
import { useEffect } from "react";
import ProductMenu from "../../../shared/ui/ProductMenu";
import Cards from "../../../shared/ui/Cards";
import Filter from "../../../shared/ui/Filter";
import shoppingOrderArr from "../const/shoppingOrderArr";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { runInAction } from "mobx";
import useInjection from "../../../shared/context/inversify/useInjection";
import productCategory from "../../../entities/product/const/productCategory";
import { ProductCategoryValue } from "../../../entities/product/model/ProductCategory";
import productSubCategory from "../../../entities/product/const/productSubCategory";
import categoryParamName from "../../../shared/const/categoryParamName";
import subCategoryParamName from "../../../shared/const/subCategoryParamName";

const Shopping = () => {

    const vm = useInjection( ShoppingViewModel )

    const [searchParams] = useSearchParams()

    const navigate = useNavigate()

    const location = useLocation()

    useEffect(() => {

        const categoryParam = searchParams.get( categoryParamName )

        const subСategoryParam = searchParams.get( subCategoryParamName )

        if (categoryParam && subСategoryParam) {

            runInAction(() => {

                vm.setCategory(categoryParam as ProductCategoryValue)

                vm.setSubcategory( subСategoryParam )
            })
        } else {

            const param = new URLSearchParams( searchParams )

            param.set(categoryParamName, Object.keys( productCategory )[vm.getCategory - 1])

            param.set(subCategoryParamName, productSubCategory[ vm.getCategory ][vm.getSubCategory - 1].value)

            navigate({

                pathname: location.pathname,
                search: param.toString(),
            })
        }
    }, [vm, searchParams, navigate, location])

    return (

        <section className="grid px-container gap-[30px] laptop:gap-[50px] desktop:gap-[75px] laptop:px-container-1024">

            <h3 className="capitalize">Pet shopping</h3>

            <menu className="grid gap-[30px] laptop:gap-[50px] tablet:grid-cols-2">

                <div className="tablet:col-span-2">

                    <ProductMenu

                        activeId={vm.getCategory}
                        setActiveCategory={name => {

                            vm.unsetProduct()

                            const activeId = vm.setCategory( name as ProductCategoryValue )

                            vm.setProduct(activeId, vm.getSubCategory, vm.getTag)

                            const param = new URLSearchParams( searchParams )

                            param.set(categoryParamName, Object.keys( productCategory )[ activeId - 1 ])

                            navigate({

                                pathname: location.pathname,
                                search: param.toString(),
                            })

                            
                        }}
                        subCategories={Object.values( productCategory )}
                    />
                </div>

                <div>

                    <ProductMenu
                    
                        activeId={vm.getSubCategory}
                        setActiveCategory={name => {

                            vm.unsetProduct()

                            const activeId = vm.setSubcategory( name )

                            vm.setProduct(vm.getCategory, activeId, vm.getTag)

                            const param = new URLSearchParams( searchParams )

                            param.set(subCategoryParamName, productSubCategory[ vm.getCategory ][ activeId - 1 ].value)

                            navigate({

                                pathname: location.pathname,
                                search: param.toString(),
                            })
                        }}
                        subCategories={productSubCategory[ vm.getCategory ]}
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
            
                setProduct={() => vm.setProduct(vm.getCategory, vm.getSubCategory, vm.getTag)}
                unsetProduct={() => vm.unsetProduct()}
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