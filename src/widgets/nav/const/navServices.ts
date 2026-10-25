import phoneService from '/icons/phone.svg'
import gmailService from '/icons/gmail.svg'

type NavService = {

    id: number
    service: string
    serviceTitle: string
    serviceLink: string
    setviceImg: string
}

const navServices: NavService[] = [

    {
        id: 1,
        service: 'Phone',
        serviceTitle: '+7 (912)-227-88-26',
        serviceLink: 'tel:+79122278826',
        setviceImg: phoneService,
    },

    {
        id: 2,
        service: 'Email',
        serviceTitle: 'waggy@gmail.com',
        serviceLink: 'mailto:ulanovskijnikita@gmail.com',
        setviceImg: gmailService,
    },
]

export default navServices