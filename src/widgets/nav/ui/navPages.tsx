import { Link, NavLink, useSearchParams } from "react-router"
import pages from "../../../app/router/pages"
import { observer } from "mobx-react-lite"
import NavViewModel from "../model/NavViewModel"
import useInjection from "../../../shared/context/inversify/useInjection"
import productCategory from "../../../entities/product/const/productCategory"
import productSubCategory from "../../../entities/product/const/productSubCategory"
import categoryParamName from "../../../shared/const/categoryParamName"
import searchParamName from "../../../shared/const/searchParamName"
import subCategoryParamName from "../../../shared/const/subCategoryParamName"
import ShoppingViewModel from "../../shopping/model/ShoppingViewModel"
import foodiesSubcategoryParamName from "../../../shared/const/foodiesSubcategoryParamName"
import clothingSubcategoryParamName from "../../../shared/const/clothingSubcategoryParamName"
import FoodiesViewModel from "../../foodies/model/FoodiesViewModel"
import ClothingViewModel from "../../clothing/model/ClothingViewModel"

type NavPages = {

    id: number
    page: () => JSX.Element
}

const navPages: NavPages[] = [

    {
        id: 1,
        page: observer(() => {

            const foodiesVm = useInjection( FoodiesViewModel )
            
            const clothingVm = useInjection( ClothingViewModel )

            return (

                <NavLink

                    className={

                        ( {isActive} ) => {

                            return (isActive) ? "text-accent" : "text-main"
                        }
                    }                                            
                    
                    to={{

                        pathname: pages.home,
                        search: new URLSearchParams({

                            [ foodiesSubcategoryParamName ]: productSubCategory[ productCategory.foodies.id ][ foodiesVm.getActiveSubCategoryId - 1 ].value,
                            [ clothingSubcategoryParamName ]: productSubCategory[ productCategory.clothing.id ][ clothingVm.getActiveSubCategoryId - 1 ].value,
                        }).toString()
                    }}
                >
                    Home
                </NavLink>
            )
        }),
    },

    {
        id: 2,
        page: observer(() => {

            const [searchParam] = useSearchParams()

            return (

                <Link                                        
                    
                    to={{
                        
                        pathname: pages.second.path,
                        hash: pages.second.hash,
                        search: searchParam.toString()
                    }}
                >
                    Second
                </Link>
            )
        }),
    },

    {
        id: 3,
        page: observer(() => {

            const [searchParam] = useSearchParams()

            return (

                <Link                                        
                    
                    to={{

                        pathname: pages.aboutUs.path,
                        hash: pages.aboutUs.hash,
                        search: searchParam.toString(),
                    }}
                >
                    About us
                </Link>
            )
        }),
    },

    {
        id: 4,
        page: observer(() => {

            const vm = useInjection(NavViewModel)

            const shoppingVm = useInjection( ShoppingViewModel )

            return (

                <NavLink

                    className={
                        
                        ( {isActive} ) => {

                            return (isActive) ? "text-accent" : "text-main"
                        }
                    }                                            
                    
                    to={{

                        pathname: pages.shop,
                        search: vm.getTag
                                ? 
                            new URLSearchParams({

                                [ subCategoryParamName ]: productSubCategory[ shoppingVm.getCategory ][ shoppingVm.getSubCategory - 1 ].value,
                                [ categoryParamName ]: Object.keys( productCategory )[shoppingVm.getCategory - 1],
                                [ searchParamName ]: vm.getTag,
                            }).toString()
                                :
                            new URLSearchParams({

                                [ subCategoryParamName ]: productSubCategory[ shoppingVm.getCategory ][ shoppingVm.getSubCategory - 1 ].value,
                                [ categoryParamName ]: Object.keys( productCategory )[shoppingVm.getCategory - 1],
                            }).toString()
                    }}
                >
                    Shop
                </NavLink>
            )
        }),
    },

    {
        id: 5,
        page: observer(() => {

            const vm = useInjection(NavViewModel)

            return (

                <NavLink

                    className={
                        
                        ( {isActive} ) => {

                            return (isActive) ? "text-accent" : "text-main"
                        }
                    }
                    to={vm.getId ? `${pages.history}/${vm.getId}` : `${pages.profile}/${pages.signIn}`}
                >
                    History
                </NavLink>
            )
        }),
    },
]

export default navPages