import { Link, NavLink } from "react-router"
import pages from "../../../router/pages"
import container from "../../../di/container"
import AppViewModel from "../../../AppViewModel"
import { observer } from "mobx-react-lite"

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

            const appVm = container.get(AppViewModel)

            return (

                <NavLink

                    className={
                        
                        ( {isActive} ) => {

                            return (isActive) ? "text-accent" : "text-main"
                        }
                    }                                            
                    
                    to={pages.shop + '/' + appVm.getSearchTag}
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