import { Link, NavLink } from "react-router"
import pages from "../../../app/router/pages"
import { observer } from "mobx-react-lite"
import FooterViewModel from "../model/FooterViewModel"
import useInjection from "../../../shared/context/inversify/useInjection"

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
                    
                    to={{
                        pathname: pages.second.path,
                        hash: pages.second.hash
                    }}
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

            const vm = useInjection(FooterViewModel)

            return (

                <NavLink

                    className={
                        
                        ( {isActive} ) => {

                            return (isActive) ? "text-accent" : "text-main"
                        }
                    }
                    to={vm.getUserId ? `${pages.history}/${vm.getUserId}` : `${pages.profile}/${pages.signIn}`}
                >

                    History
                </NavLink>
            )
        }),
    },
]

export default footerLink