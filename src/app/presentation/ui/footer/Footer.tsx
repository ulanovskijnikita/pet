import Logo from "../Logo"
import footerSocial from "./footerSocial"

const Footer = () => {

    return (

        <footer className="grid">

            <div>

                <div>

                    <Logo />

                    <p className="text-label text-sub-title pt-[25px] pb-[30px]">All the most interesting things are on our social networks</p>

                    <div className="flex gap-[10px]">

                        {

                            footerSocial.map(

                                (social) => {

                                    return (

                                        <div className="cursor-pointer w-[32px] tablet:w-[38px] laptop:w-[45px] aspect-square *:w-full! *:h-full" key={social.id}>

                                            {

                                                social.item()
                                            }
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer