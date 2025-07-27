import { Link, NavLink } from "react-router"
import pages from "../../router/pages"
import { observer } from "mobx-react-lite"
import FooterViewModel from "../../viewmodel/FooterViewModel"
import useInjection from "../../context/inversify/useInjection"

type FooterLink = {

    id: number
    page: () => JSX.Element
}

const footerLink: FooterLink[] = [

    {
        id: 1,
        page: observer(() => {

            return (

                <NavLink

                    className={

                        ( {isActive} ) => {

                            return (isActive) ? "text-accent" : "text-main"
                        }
                    }                                            
                    
                    to={pages.home}
                >

                    Home
                </NavLink>
            )
        }),
    },

    {
        id: 2,
        page: observer(() => {

            return (

                <Link                                        
                    
                    to={pages.second.path + pages.second.hash}
                >

                    Second
                </Link>
            )
        }),
    },

    {
        id: 3,
        page: observer(() => {

            return (

                <Link                                        
                    
                    to={pages.contact}
                >

                    contact
                </Link>
            )
        }),
    },

    {
        id: 4,
        page: observer(() => {

            const vm = useInjection(FooterViewModel)

            return (

                <NavLink

                    className={
                        
                        ( {isActive} ) => {

                            return (isActive) ? "text-accent" : "text-main"
                        }
                    }                                            
                    
                    to={pages.shop + '/' + vm.getSearchTag}
                >

                    Shop
                </NavLink>
            )
        }),
    },

    {
        id: 5,
        page: observer(() => {

            return (

                <NavLink

                    className={
                        
                        ( {isActive} ) => {

                            return (isActive) ? "text-accent" : "text-main"
                        }
                    }                                            
                    
                    to={pages.history}
                >

                    History
                </NavLink>
            )
        }),
    },
]

export default footerLink