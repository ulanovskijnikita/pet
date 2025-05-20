import { observer } from "mobx-react-lite";
import LinkButton from "../ui/LinkButton";
import pages from "../../router/pages";

type BannerProps = {

    img: string
    title: string
    subtitle: string
}

const Banner = observer((props: BannerProps) => {

    return (

        <section className="w-full relative bg-section px-container py-[75px] tablet:py-[150px] laptop:py-[55px] laptop:px-container-1024 desktop:py-[35px] laptop:flex laptop:items-center laptop:justify-between">

            <div className="grid gap-[15px] relative z-20 h-fit tablet:w-[310px] laptop:w-[400px]">

                <p className="text-accent font-functional capitalize font-light">{props.subtitle}</p>

                <h2 className="uppercase leading-[100%]">{props.title}</h2>

                <LinkButton linkTo={pages.shop} linkText="shop all" />
            </div>

            <img src={props.img} alt="banner-img" className="absolute w-[140px] tablet:w-[360px] laptop:min-w-[485px] z-10 top-container right-container tablet:top-[50px] tablet:right-[50px] laptop:static" />
        </section>
    )
})

export default Banner