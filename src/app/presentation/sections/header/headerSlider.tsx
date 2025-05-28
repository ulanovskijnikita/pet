import { observer } from "mobx-react-lite"
import AppViewModel from "../../../AppViewModel"
import container from "../../../di/container"
import pages from "../../../router/pages"
import LinkButton from "../../ui/LinkButton"

type HeaderSlider = {

    id: number
    title: string
    subtitle: string
    link: () => JSX.Element
    img: string
}

const headerSlider: HeaderSlider[] = [

    {

        id: 1,
        img: '/decorative/decorative-header-slider-1.png',
        link: observer(() => {

            const appVm = container.get(AppViewModel)

            return (

                <LinkButton linkTo={pages.shop + '/' + appVm.getSearchTag} linkText="shop now"/>
            )
        }),
        title: 'Best destination for <span class="text-accent tracking-[3%]">your pets</span>',
        subtitle: 'Save 10 - 20 % off',
    },

    {

        id: 2,
        img: '/decorative/decorative-header-slider-2.png',
        link: observer(() => {

            const appVm = container.get(AppViewModel)

            return (

                <LinkButton linkTo={pages.shop + '/' + appVm.getSearchTag} linkText="shop now"/>
            )
        }),
        title: 'Order <span class="text-accent tracking-[3%]">any product</span> from home',
        subtitle: 'stay in comfort',
    },

    {

        id: 3,
        img: '/decorative/decorative-header-slider-3.png',
        link: observer(() => {

            const appVm = container.get(AppViewModel)

            return (

                <LinkButton linkTo={pages.shop + '/' + appVm.getSearchTag} linkText="shop now"/>
            )
        }),
        title: 'delight pet with the <span class="text-accent">best brands</span>',
        subtitle: 'create style',
    },
]

export default headerSlider