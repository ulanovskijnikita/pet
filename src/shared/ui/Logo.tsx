import { Link } from "react-router";
import logo from "/icons/logo.svg"
import pages from "../../app/router/pages";
import foodiesSubcategoryParamName from "../const/foodiesSubcategoryParamName";
import clothingSubcategoryParamName from "../const/clothingSubcategoryParamName";
import productSubCategory from "../../entities/product/const/productSubCategory";
import productCategory from "../../entities/product/const/productCategory";
import useInjection from "../context/inversify/useInjection";
import FoodiesViewModel from "../../widgets/foodies/model/FoodiesViewModel";
import ClothingViewModel from "../../widgets/clothing/model/ClothingViewModel";

export default function Logo() {

    const foodiesVm = useInjection( FoodiesViewModel )
            
    const clothingVm = useInjection( ClothingViewModel )

    return (

        <Link

            to={{

                pathname: pages.home,
                search: new URLSearchParams({

                    [ foodiesSubcategoryParamName ]: productSubCategory[ productCategory.foodies.id ][ foodiesVm.getActiveSubCategoryId - 1 ].value,
                    [ clothingSubcategoryParamName ]: productSubCategory[ productCategory.clothing.id ][ clothingVm.getActiveSubCategoryId - 1 ].value,
                }).toString()
            }}
            onClick={

                () => window.scrollTo({top: 0})
            }
            className="flex items-center gap-[8px] tablet:gap-[4px]"
        >

            <img className="w-[58px] tablet:w-[57px]" src={logo} alt="logo" />

            <div>

                <p className="text-logo uppercase laptop:leading-[15px] laptop:mt-[10px]">Waggy</p>

                <p className="text-label font-functional text-sub-title">Pet shop.</p>
            </div>
        </Link>
    )
}