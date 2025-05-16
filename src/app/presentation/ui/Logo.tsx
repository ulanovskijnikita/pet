import { Link } from "react-router";
import pages from "../../router/pages";

export default function Logo() {

    return (

        <Link
            to={pages.home}

            onClick={

                () => window.scrollTo({top: 0})
            }
            
            className="flex items-center gap-[8px] tablet:gap-[4px]"
        >

            <img className="w-[58px] tablet:w-[57px]" src="/icons/logo.svg" alt="logo" />

            <div>

                <p className="text-logo uppercase laptop:leading-[15px] laptop:mt-[10px]">Waggy</p>

                <p className="text-label font-functional text-sub-title">Pet shop.</p>
            </div>
        </Link>
    )
}