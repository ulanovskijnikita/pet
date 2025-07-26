import decorativeHeaderSlider1 from '/decorative/decorative-header-slider-1.png'
import decorativeHeaderSlider2 from '/decorative/decorative-header-slider-2.png'
import decorativeHeaderSlider3 from '/decorative/decorative-header-slider-3.png'

type HeroSlider = {

    id: number
    title: string
    subtitle: string
    linkText: string
    img: string
}

const heroSlider: HeroSlider[] = [

    {

        id: 1,
        img: decorativeHeaderSlider1,
        title: 'Best destination for <span class="text-accent tracking-[3%]">your pets</span>',
        subtitle: 'Save 10 - 20 % off',
        linkText: "shop now",
    },

    {

        id: 2,
        img: decorativeHeaderSlider2,
        linkText: "shop now",
        title: 'Order <span class="text-accent tracking-[3%]">any product</span> from home',
        subtitle: 'stay in comfort',
    },

    {

        id: 3,
        img: decorativeHeaderSlider3,
        title: 'delight pet with the <span class="text-accent">best brands</span>',
        subtitle: 'create style',
        linkText: "shop now",
    },
]

export default heroSlider