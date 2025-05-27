import { Link, NavLink, useLocation } from "react-router";
import Logo from "../Logo";
import SearchInput from "../SearchInput";
import navPages from "./navPages";
import navProfile from "./navProfile";
import navServices from "./navServices";
import pages from "../../../router/pages";
import container from "../../../di/container";
import AppViewModel from "../../../AppViewModel";
import { observer } from "mobx-react-lite";
import { DEFAULT_USER_ID } from "../../../../domain/model/user/User";

const Nav = observer(() => {

    const appVm = container.get(AppViewModel)

    const location = useLocation()

    return (

        <div className="desktop:sticky desktop:top-0 z-10 bg-bg" id={pages.contact.substring(1)}>

            <nav className="p-container laptop:px-0 laptop:mx-auto laptop:w-[clamp(71.071rem,46.173rem+34.04vw,92.857rem)] desktop:w-[1300px] gap-[15px] flex flex-col items-center tablet:flex-row tablet:justify-between w-full laptop:items-center">

                <Logo />

                <SearchInput />

                <ul className="flex gap-[35px] text-sub-title text-label order-1">

                    {
                        navServices.map(

                            value => (

                                <li className="flex items-center gap-[10px] laptop:flex-col laptop:items-end laptop:gap-[8px]" key={value.id}>

                                    <p className="text-sub-title text-label">

                                        {value.service}
                                    </p>

                                    <a href={value.serviceLink}>

                                        <p className="hidden laptop:block text-btn text-main duration-300 hover:text-accent active:text-main">{value.serviceTitle}</p>

                                        <img src={value.setviceImg} alt="service-img" className="w-[15px] tablet:w-[22px] laptop:hidden" title={value.serviceTitle} />
                                    </a>
                                </li>
                            )
                        )
                    }
                </ul>
            </nav>

            <div className="w-[calc(100%-30px)] laptop:w-full h-[1px] mx-auto laptop:mx-0 bg-[#EDEDED]"></div>

            <nav className="p-container laptop:w-[clamp(71.071rem,46.173rem+34.04vw,92.857rem)] laptop:px-0 desktop:w-[1312px] laptop:mx-auto flex items-center flex-col gap-[15px] tablet:flex-row tablet:justify-between tablet:items-end">

                <Link to={pages.category.path + pages.category.hash} className="flex gap-[5px] laptop:gap-[14px] items-center duration-300 hover:text-accent active:text-main">

                    <span className="text-btn">Shop By Categories</span>

                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.57737 5.32938L0.176305 2.038C-0.0587684 1.8105 -0.0587684 1.44264 0.176305 1.21757L0.741482 0.67062C0.976555 0.443127 1.35667 0.443127 1.58925 0.67062L4 3.00363L6.41075 0.67062C6.64583 0.443127 7.02595 0.443127 7.25852 0.67062L7.82369 1.21757C8.05877 1.44506 8.05877 1.81292 7.82369 2.038L4.42263 5.32938C4.19256 5.55687 3.81244 5.55687 3.57737 5.32938Z" fill="currentColor"/>
                    </svg>
                </Link>

                <ul className="flex justify-between w-full tablet:w-fit tablet:gap-[40px] pt-[15px] pb-[8px] tablet:p-0">

                    {

                        navPages.map(

                            value =>
                                (

                                    <li className="text-btn capitalize" key={value.id}>

                                        <NavLink

                                            className={
                                                ( {isActive} : {isActive: boolean} ) => {
                                                    return (isActive && !value.hash) ? "text-accent" : "text-main duration-300 hover:text-accent active:text-main"
                                                }
                                            }                                            
                                            
                                            to={value.hash ? value.link + value.hash : value.link}
                                        >

                                            {value.title}
                                        </NavLink>
                                        
                                    </li>
                                )
                        )
                    }
                </ul>

                <ul className="flex justify-between gap-[30px] tablet:gap-[25px]">

                    {

                        navProfile.map(

                            value =>
                                (
                                    
                                    <li className="w-[30px] tablet:w-[34px]" key={value.id}>
                                        
                                        <value.icon

                                            id={appVm.getUser?.id ?? DEFAULT_USER_ID} 
                                            link={value.link}
                                            pathname={location.pathname}
                                        />
                                    </li>
                                )
                        )
                    }
                </ul>
            </nav>
        </div>
    )
})

export default Nav