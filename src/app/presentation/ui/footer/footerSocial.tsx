import telegram from '/icons/social/telegram.svg'
import vk from '/icons/social/vk.svg'
import pinterest from '/icons/social/pinterest.svg'
import github from '/icons/social/github.svg'
import youtude from '/icons/social/youtude.svg'

type FooterSocial = {

    id: number
    item: string
}

const footerSocial: FooterSocial[] = [

    {
        id: 1,
        item: telegram,
    },

    {
        id: 2,
        item: vk,
    },

    {
        id: 3,
        item: pinterest,
    },

    {
        id: 4,
        item: github,
    },

    {
        id: 5,
        item: youtude,
    },
]

export default footerSocial