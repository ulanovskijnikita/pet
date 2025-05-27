import { NavLink } from "react-router"
import Logo from "../Logo"
import footerLink from "./footerLink"
import footerSocial from "./footerSocial"
import pages from "../../../router/pages"

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (

        <footer className="grid gap-[25px] px-container laptop:px-container-1024" id={pages.aboutUs.substring(1)}>

            <div className="grid gap-[25px] tablet:grid-cols-2 laptop:grid-cols-3">

                <div>

                    <Logo />

                    <p className="text-label text-sub-title pt-[25px] pb-[30px] w-[200px] font-functional">All the most interesting things are on our social networks</p>

                    <div className="flex gap-[10px]">

                        {

                            footerSocial.map(

                                (social) => {

                                    return (

                                        <div className="cursor-pointer w-[32px] tablet:w-[38px] laptop:w-[45px] *:w-full *:h-full" key={social.id}>

                                            <img className="block" src={social.item} alt="social-icon" />
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>

                <div className="grid gap-[12px]">

                    <h4 className="capitalize">ouick links</h4>

                    <ul className="grid gap-[6px]">

                        {

                            footerLink.map(

                                (link) => {

                                    return (

                                        <li className="text-btn" key={link.id}>

                                            <NavLink

                                                className={
                                                    ( {isActive} : {isActive: boolean} ) => {
                                                        return (isActive && !link.hash) ? "text-accent" : "text-main duration-300 hover:text-accent active:text-main"
                                                    }
                                                }                                            
                                                
                                                to={link.hash ? link.link + link.hash : link.link}
                                            >

                                                {link.title}
                                            </NavLink>
                                            
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>

                <div className="grid gap-[15px] w-full items-end tablet:col-span-2 laptop:col-span-1 laptop:items-start laptop:flex laptop:flex-col laptop:grid-cols-1 grid-cols-2">

                    <div className="grid gap-[10px]">

                        <h4>Our support</h4>

                        <p className="text-label text-sub-title font-functional">Our support will always help you, just write to us</p>
                    </div>

                    <div className="cursor-pointer w-[32px] tablet:w-[38px] laptop:w-[45px] *:w-full *:h-full">

                        <a href="mailto:ulanovskijnikita@gmail.com">

                            <img src="/icons/support.svg" alt="support-link" />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="flex py-[25px] justify-between border-t border-[#D9D9D8]">

                <p className="text-sub-title text-label font-functional">©{currentYear} Waggy. All rights reserved.</p>

                <p className="text-sub-title text-label font-functional">Template design by: ulanovskijnikita</p>
            </div>
        </footer>
    )
}

export default Footer