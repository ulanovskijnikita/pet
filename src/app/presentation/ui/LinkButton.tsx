import { Link } from "react-router"

type LinkButtonParam = {

    linkTo: string
    linkText: string
}

export default function LinkButton({ linkText, linkTo }: LinkButtonParam) {

    return (

        <Link to={linkTo} className="flex items-start w-fit gap-[6px] py-[20px] px-[32px] tablet:px-[40px] laptop:px-[50px] laptop:py-[28px] border-[1px] rounded-btn border-main">

            <span className="uppercase">{linkText}</span>

            <img className="laptop:mt-[1px] desktop:mt-[3px]" src="/icons/btn-decorative.svg" alt="btn-decorative" />
        </Link>
    )
}