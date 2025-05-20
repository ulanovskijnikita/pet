import { ReactNode } from "react"

type FormSectionProps = {

    children: ReactNode
}

const FormSection = (props: FormSectionProps) => {

    return (

        <section className="relative px-[calc(50vw-150px)] laptop:px-[calc(50vw-255px)] py-[70px] tablet:py-[100px] laptop:py-[150px] flex flex-col text-center gap-[15px] tablet:gap-[30px] items-center overflow-clip">

            <div className="absolute inset-0 -z-20 bg-section"></div>

            <img className="absolute -top-[15px] -z-10 -left-[15px] tablet:top-[45px] tablet:left-[45px] laptop:left-container-1024" src="/icons/decorative-bg.svg" alt="decorative-bg" />

            <img className="absolute -bottom-[15px] tablet:bottom-[45px] tablet:right-[45px] laptop:right-container-1024 -z-10 -right-[15px] overflow-hidden" src="/icons/decorative-bg.svg" alt="decorative-bg" />

            {props.children}
        </section>
    )
}

export default FormSection