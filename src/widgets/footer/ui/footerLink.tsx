import { Link, NavLink, useSearchParams } from "react-router"
import pages from "../../../app/router/pages"
import { observer } from "mobx-react-lite"
import FooterViewModel from "../model/FooterViewModel"
import useInjection from "../../../shared/context/inversify/useInjection"
import productCategory from "../../../entities/product/const/productCategory"
import productSubCategory from "../../../entities/product/const/productSubCategory"
import categoryParamName from "../../../shared/const/categoryParamName"
import searchParamName from "../../../shared/const/searchParamName"
import subCategoryParamName from "../../../shared/const/subCategoryParamName"
import foodiesSubcategoryParamName from "../../../shared/const/foodiesSubcategoryParamName"
import clothingSubcategoryParamName from "../../../shared/const/clothingSubcategoryParamName"

type FooterLink = {

    id: number
    page: () => JSX.Element
}

const footerLink: FooterLink[] = [

    {
        id: 1,
        page: observer(() => {

            const vm = useInjection( FooterViewModel )

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

                            [ foodiesSubcategoryParamName ]: productSubCategory[ productCategory.foodies.id ][ vm.getFoodiesSubCategory - 1 ].value,
                            [ clothingSubcategoryParamName ]: productSubCategory[ productCategory.clothing.id ][ vm.getClothingSubCategory - 1 ].value,
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
                        search: searchParam.toString(),
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
                        pathname: pages.contact.path,
                        hash: pages.contact.hash,
                        search: searchParam.toString(),
                    }}
                >

                    contact
                </Link>
            )
        }),
    },

    {
        id: 4,
        page: observer(() => {

            const vm = useInjection(FooterViewModel)

            return (

                <NavLink

                    className={
                        
                        ( {isActive} ) => {

                            return (isActive) ? "text-accent" : "text-main"
                        }
                    }                                            
                    
                    to={{

                        pathname: pages.shop,
                        search: vm.getSearchTag
                                ? 
                            new URLSearchParams({

                                [ subCategoryParamName ]: productSubCategory[ vm.getCategory ][ vm.getSubCategory - 1 ].value,
                                [ categoryParamName ]: Object.keys( productCategory )[vm.getCategory - 1],
                                [ searchParamName ]: vm.getSearchTag,
                            }).toString()
                                :
                            new URLSearchParams({

                                [ subCategoryParamName ]: productSubCategory[ vm.getCategory ][ vm.getSubCategory - 1 ].value,
                                [ categoryParamName ]: Object.keys( productCategory )[vm.getCategory - 1],
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

            const vm = useInjection(FooterViewModel)

            return (

                <NavLink

                    className={
                        
                        ( {isActive} ) => {

                            return (isActive) ? "text-accent" : "text-main"
                        }
                    }
                    to={vm.getUserId ? `${pages.history}/${vm.getUserId}` : `${pages.profile}/${pages.signIn}`}
                >

                    History
                </NavLink>
            )
        }),
    },
]

export default footerLink