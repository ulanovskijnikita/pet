import { Link, NavLink } from "react-router"
import pages from "../../../app/router/pages"
import { observer } from "mobx-react-lite"
import NavViewModel from "../model/NavViewModel"
import useInjection from "../../../shared/context/inversify/useInjection"

type NavPages = {

    id: number
    page: () => JSX.Element
}

const navPages: NavPages[] = [

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
                    
                    to={{

                        pathname: pages.aboutUs.path,
                        hash: pages.aboutUs.hash,
                    }}
                >
                    About us
                </Link>
            )
        }),
    },

    {
        id: 4,
        page: observer(() => {

            const vm = useInjection(NavViewModel)

            return (

                <NavLink

                    className={
                        
                        ( {isActive} ) => {

                            return (isActive) ? "text-accent" : "text-main"
                        }
                    }                                            
                    
                    to={pages.shop + '/' + (vm.getTag ?? '')}
                >
                    Shop
                </NavLink>
            )
        }),
    },

    {
        id: 5,
        page: observer(() => {

            const vm = useInjection(NavViewModel)

            return (

                <NavLink

                    className={
                        
                        ( {isActive} ) => {

                            return (isActive) ? "text-accent" : "text-main"
                        }
                    }
                    to={vm.getId ? `${pages.history}/${vm.getId}` : `${pages.profile}/${pages.signIn}`}
                >
                    History
                </NavLink>
            )
        }),
    },
]

export default navPages