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
        setviceImg: '/icons/phone.svg'
    },

    {
        id: 2,
        service: 'Email',
        serviceTitle: 'waggy@gmail.com',
        serviceLink: 'mailto:ulanovskijnikita@gmail.com',
        setviceImg: '/icons/gmail.svg'
    },
]

export default navServices