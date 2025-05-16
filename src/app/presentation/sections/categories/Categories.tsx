import pages from "../../../router/pages"
import categoryArr from "./categoryArr"

export default function Categories() {

    return (

        <section id={pages.category.hash.slice(1)} className="px-container laptop:px-container-1024 tablet:w-full py-[15px] tablet:py-0 flex flex-wrap justify-center gap-[40px] tablet:gap-0 tablet:justify-between">


            {
                categoryArr.map(

                    value =>
                        (
                            
                            <div key={value.id} className="grid gap-[16px]">

                                <img src={value.icon} className="mx-auto w-[40px] tablet:w-[80px]" alt="category-icon" />

                                <h4>{value.title}</h4>
                            </div>
                        )
                )
            }            
        </section>
    )
}