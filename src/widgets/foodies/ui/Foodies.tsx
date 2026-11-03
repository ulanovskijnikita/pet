import { observer } from "mobx-react-lite";
import FoodiesViewModel from "../model/FoodiesViewModel";
import Cards from "../../../shared/ui/Cards";
import LinkButton from "../../../shared/ui/LinkButton";
import pages from "../../../app/router/pages";
import { useEffect } from "react";
import useInjection from "../../../shared/context/inversify/useInjection";
import ProductMenu from "../../../shared/ui/ProductMenu";
import { useSearchParams, useNavigate, useLocation } from "react-router";
import { ProductSubcategoryValue } from "../../../entities/product/model/ProductSubcategory";
import productSubCategory from "../../../entities/product/const/productSubCategory";
import productCategory from "../../../entities/product/const/productCategory";
import categoryParamName from "../../../shared/const/categoryParamName";
import searchParamName from "../../../shared/const/searchParamName";
import subCategoryParamName from "../../../shared/const/subCategoryParamName";
import foodiesSubcategoryParamName from "../../../shared/const/foodiesSubcategoryParamName";

const Foodies = observer(() => {

    const [searchParams] = useSearchParams()

    const navigate = useNavigate()

    const location = useLocation()
    
    const vm = useInjection( FoodiesViewModel )

    useEffect(() => {

        const subcategoryParam = searchParams.get( foodiesSubcategoryParamName )

        if (subcategoryParam == productSubCategory[ productCategory.foodies.id ][ vm.getActiveSubCategoryId - 1 ].value) return

        if( subcategoryParam ) {

            vm.setActiveSubCategoryId( subcategoryParam as ProductSubcategoryValue )
        } else {

            const param = new URLSearchParams( searchParams )

            param.set(foodiesSubcategoryParamName, productSubCategory[ productCategory.foodies.id ][ vm.getActiveSubCategoryId - 1 ].value)

            navigate({

                hash: location.hash,
                pathname: location.pathname,
                search: param.toString(),
            })
        }
    }, [vm, searchParams, navigate, location])

    return (

        <section className="grid px-container gap-[30px] laptop:px-container-1024 relative">

            <h3 className="capitalize">Pet foodies</h3>

            <menu className="grid gap-[30px] laptop:gap-0 tablet:grid-cols-2 desktop:flex desktop:justify-between">
                
                <ProductMenu

                    activeId={vm.getActiveSubCategoryId}
                    setActiveCategory={name => {

                        const activeId = vm.setActiveSubCategoryId( name )

                        const param = new URLSearchParams( searchParams )

                        param.set(foodiesSubcategoryParamName, productSubCategory[ productCategory.foodies.id ][ activeId - 1 ].value)

                        navigate({

                            hash: undefined,
                            pathname: location.pathname,
                            search: param.toString(),
                        })
                    }}
                    subCategories={productSubCategory[ productCategory.foodies.id ]}
                />

                <div className="tablet:justify-self-end">

                    <LinkButton 
                    
                        linkTo={{

                            pathname: pages.shop,
                            search: vm.getTag 
                                ? 
                            new URLSearchParams({

                                [ subCategoryParamName ]: productSubCategory[ vm.getCategory ][ vm.getSubCategory - 1 ].value,
                                [ categoryParamName ]: Object.keys( productCategory )[vm.getCategory - 1],
                                [ searchParamName ]: vm.getTag,
                            }).toString()
                                :
                            new URLSearchParams({

                                [ subCategoryParamName ]: productSubCategory[ vm.getCategory ][ vm.getSubCategory - 1 ].value,
                                [ categoryParamName ]: Object.keys( productCategory )[vm.getCategory - 1],
                            }).toString()
                        }} 
                        linkText="shop all" 
                    />
                </div>
            </menu>

            <Cards

                unsetProduct={() => vm.unsetFoodies()}
                toggleFavourite={(id, index) => vm.toggleFavourite(id, index)}
                products={vm.getFoodies}
                hasMore={false}
                addToCart={(id) => vm.addToUserCart = id}
                setProduct={() => vm.setFoodies( vm.getActiveSubCategoryId )}
                altTitle={"No products found with parametrs"}
            />
        </section>
    )
})

export default Foodies