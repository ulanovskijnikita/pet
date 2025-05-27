import pages from "../../../router/pages"

type NavPages = {

    id: number
    link: string
    title: string
    hash?: string
}

const navPages: NavPages[] = [

    {
        id: 1,
        link: pages.home,
        title: "Home"
    },

    {
        id: 2,
        link: pages.second.path,
        title: "Second",
        hash: pages.second.hash
    },

    {
        id: 3,
        link: '',
        title: "About us",
        hash: pages.aboutUs,
    },

    {
        id: 4,
        link: pages.shop,
        title: "Shop"
    },

    {
        id: 5,
        link: pages.history,
        title: "History"
    },
]

export default navPages