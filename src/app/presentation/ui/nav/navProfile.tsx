import { NavLink } from "react-router"
import { UserId } from "../../../../domain/model/user/User"
import pages from "../../router/pages"
import { observer } from "mobx-react-lite"
import NavViewModel from "../../viewmodel/navViewModel/NavViewModel"
import useInjection from "../../context/inversify/useInjection"

type IconProps = {

    id: UserId | null
    pathname: string
    link: string
}

type NavProfile = {

    id: UserId
    icon: (props: IconProps) => JSX.Element
    link: string
}

const navProfile: NavProfile[] = [

    {
        id: 1,
        icon: observer((props) => {

            return (

                <NavLink
                    to={

                        props.id ? `${props.link}/${props.id}` : `${pages.profile}/${pages.signIn}`                        
                    }
                    className={

                        ( {isActive} : {isActive: boolean} ) =>
                            (isActive && props.link + '/' + props.id == props.pathname)
                                ? "text-accent"
                                : "text-main duration-300 hover:text-accent active:text-main"
                    }
                >

                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M17.8508 11.272C17.113 10.4754 16.0825 10.0368 14.9451 10.0368C13.8016 10.0368 12.7677 10.4728 12.0333 11.2644C11.291 12.0648 10.9293 13.1525 11.0142 14.3271C11.1825 16.6443 12.9459 18.5294 14.9451 18.5294C16.9443 18.5294 18.7046 16.6447 18.8756 14.3278C18.9617 13.1639 18.5977 12.0784 17.8508 11.272V11.272ZM21.6179 27.0221H8.27229C8.09761 27.0243 7.92462 26.9876 7.7659 26.9146C7.60719 26.8416 7.46674 26.7342 7.35478 26.6001C7.10834 26.3055 7.00901 25.9032 7.08256 25.4964C7.40255 23.7213 8.4012 22.2302 9.97082 21.1834C11.3653 20.2541 13.1317 19.7426 14.9451 19.7426C16.7585 19.7426 18.5249 20.2545 19.9193 21.1834C21.489 22.2298 22.4876 23.7209 22.8076 25.496C22.8812 25.9028 22.7818 26.3051 22.5354 26.5997C22.4235 26.7339 22.283 26.8414 22.1243 26.9145C21.9656 26.9875 21.7926 27.0243 21.6179 27.0221V27.0221Z" className="fill-current" />
                    </svg>
                </NavLink>
            )
        }),
        link: pages.profile
    },

    {
        id: 2,
        icon: observer((props) => {

            return (

                <NavLink
                    to={

                        props.id ? `${props.link}/${props.id}` : `${pages.profile}/${pages.signIn}`                        
                    }
                    className={

                        ( {isActive} : {isActive: boolean} ) =>
                            (isActive && props.link + '/' + props.id == props.pathname)
                                ? "text-accent"
                                : "text-main duration-300 hover:text-accent active:text-main"
                    }
                >

                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M14.9453 25.8088C14.7018 25.8085 14.464 25.7349 14.2628 25.5976C11.2832 23.575 9.99301 22.1881 9.28138 21.321C7.76483 19.4727 7.03879 17.5751 7.05926 15.5202C7.08314 13.1654 8.97238 11.25 11.2707 11.25C12.9419 11.25 14.0994 12.1914 14.7735 12.9754C14.7949 13 14.8213 13.0198 14.8509 13.0333C14.8805 13.0468 14.9127 13.0538 14.9453 13.0538C14.9779 13.0538 15.01 13.0468 15.0397 13.0333C15.0693 13.0198 15.0957 13 15.117 12.9754C15.7911 12.1906 16.9486 11.25 18.6199 11.25C20.9182 11.25 22.8074 13.1654 22.8313 15.5206C22.8518 17.5759 22.125 19.4735 20.6092 21.3214C19.8976 22.1885 18.6074 23.5753 15.6277 25.598C15.4266 25.7352 15.1888 25.8086 14.9453 25.8088V25.8088Z" className="fill-current" />
                    </svg>
                </NavLink>
            )
        }),
        link: pages.favourite
    },

    {
        id: 3,
        icon: observer((props) => {

            const vm = useInjection(NavViewModel)

            return (

                <NavLink
                    to={

                        props.id ? `${props.link}/${props.id}` : `${pages.profile}/${pages.signIn}`                        
                    }
                    className={

                        ( {isActive} : {isActive: boolean} ) =>
                            (isActive && props.link + '/' + props.id == props.pathname)
                                ? "text-accent"
                                : "text-main duration-300 hover:text-accent active:text-main"
                    }
                >

                    <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M6.67283 27.8088C7.34288 27.8088 7.88607 27.2656 7.88607 26.5956C7.88607 25.9255 7.34288 25.3824 6.67283 25.3824C6.00278 25.3824 5.45959 25.9255 5.45959 26.5956C5.45959 27.2656 6.00278 27.8088 6.67283 27.8088Z" fill="#41403E"/>
                        <path d="M15.1654 27.8088C15.8354 27.8088 16.3786 27.2656 16.3786 26.5956C16.3786 25.9255 15.8354 25.3824 15.1654 25.3824C14.4953 25.3824 13.9521 25.9255 13.9521 26.5956C13.9521 27.2656 14.4953 27.8088 15.1654 27.8088Z" fill="#41403E"/>
                        <path d="M17.319 15.4027C17.2337 15.2985 17.1264 15.2145 17.0046 15.157C16.8829 15.0994 16.7499 15.0696 16.6153 15.0699H5.07627L4.84386 13.7512C4.81908 13.6108 4.7456 13.4835 4.63633 13.3919C4.52705 13.3002 4.38897 13.25 4.24635 13.25H1.81987C1.65899 13.25 1.50469 13.3139 1.39093 13.4277C1.27717 13.5415 1.21326 13.6957 1.21326 13.8566C1.21326 14.0175 1.27717 14.1718 1.39093 14.2856C1.50469 14.3993 1.65899 14.4633 1.81987 14.4633H3.73754L5.46868 24.2745C5.49346 24.415 5.56694 24.5422 5.67622 24.6339C5.78549 24.7256 5.92357 24.7758 6.0662 24.7758H15.7721C15.933 24.7758 16.0873 24.7118 16.201 24.5981C16.3148 24.4843 16.3787 24.33 16.3787 24.1691C16.3787 24.0082 16.3148 23.854 16.201 23.7402C16.0873 23.6264 15.933 23.5625 15.7721 23.5625H6.575L6.36117 22.3493H15.5234C15.7337 22.349 15.9376 22.2761 16.1003 22.1428C16.2631 22.0095 16.3748 21.8241 16.4166 21.6179L17.5085 16.1584C17.5348 16.0262 17.5315 15.8899 17.4987 15.7592C17.4659 15.6286 17.4045 15.5068 17.319 15.4027Z" className="fill-current" />
                        <circle cx="21.1764" cy="10.8235" r="9.70588" fill="#DEAD6F" stroke="white" strokeWidth="1.76471" />
                        <text x="21.1764" y="10.8235" textAnchor="middle" dominantBaseline="middle" fill="white" className="font-functional text-[10px]">
                            {
                                vm.getLength

                                ?
                                    vm.getLength >= 10 

                                    ? 

                                        vm.getLength >= 100
                                        
                                        ?

                                        99

                                        :

                                        vm.getLength

                                    : 

                                    `0${vm.getLength}`
                                
                                :

                                '00'
                            }
                        </text>
                    </svg>
                </NavLink>
            )
        }),
        link: pages.cart
    },
]

export default navProfile