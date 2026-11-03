import { observer } from "mobx-react-lite";
import LinkButton from "../../../shared/ui/LinkButton";
import pages from "../../../app/router/pages";
import BannerViewModel from "../model/BannerViewModel";
import useInjection from "../../../shared/context/inversify/useInjection";
import subCategoryParamName from "../../../shared/const/subCategoryParamName";
import productSubCategory from "../../../entities/product/const/productSubCategory";
import categoryParamName from "../../../shared/const/categoryParamName";
import productCategory from "../../../entities/product/const/productCategory";
import searchParamName from "../../../shared/const/searchParamName";

type BannerProps = {

    img: string
    title: string
    subtitle: string
}

const Banner = (props: BannerProps) => {

    const vm = useInjection(BannerViewModel)

    return (

        <section className="w-full relative bg-section px-container py-[75px] tablet:py-[150px] laptop:py-[55px] laptop:px-container-1024 desktop:py-[35px] laptop:flex laptop:items-center laptop:justify-between">

            <div className="grid gap-[15px] relative z-20 h-fit tablet:w-[310px] laptop:w-[400px]">

                <p className="text-accent font-functional capitalize font-light">{props.subtitle}</p>

                <h2 className="uppercase leading-[100%]">{props.title}</h2>

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

            <img src={props.img} alt="banner-img" className="absolute w-[140px] tablet:w-[360px] laptop:min-w-[485px] z-10 top-container right-container tablet:top-[50px] tablet:right-[50px] laptop:static" />
        </section>
    )
}

export default observer(Banner)