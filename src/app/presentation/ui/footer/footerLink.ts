import pages from "../../../router/pages"

type FooterLink = {

    id: number
    link: string
    title: string
    hash?: string
}

const footerLink: FooterLink[] = [

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
        title: "Contact",
        hash: pages.contact
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

export default footerLink