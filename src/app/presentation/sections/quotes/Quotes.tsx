import { observer } from "mobx-react-lite";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import quotesSlider from "./quotesSlider";
import quoteSVG from "/icons/quote.svg";

const Quotes = observer(() => {

    return (

        <section className="overflow-hidden">

            <Swiper

                className="w-screen!"
                modules={[Pagination]}
                pagination={{
                    
                    clickable: true,
                    el: ".swiper-pagination",                    
                    bulletActiveClass: "swiper-pagination-bullet-active bg-main!",
                    bulletClass: "bg-transparent rounded-full cursor-pointer outline-1 outline-main aspect-square"
                }}
            >
                {
                    quotesSlider.map(

                        quote =>
                            (
                                
                                <SwiperSlide key={quote.id} className="flex! items-start gap-[10px] tablet:gap-[40px] tablet:pr-[60px] px-container laptop:px-container-1024">

                                    <img className="min-w-[70px] tablet:min-w-[140px]" src={quoteSVG} alt="quote-decorative" />

                                    <div className="grid gap-[20px]">

                                       <p className="text-sub-title leading-[150%] mt-[25px] tablet:mt-[60px]">{quote.title}</p>

                                       <h4 className="text-main font-functional font-medium">{quote.subtitle}</h4> 
                                    </div>
                                </SwiperSlide>
                            )
                    )
                }

                <div className="swiper-pagination bottom-0 *:opacity-100! relative! mt-[35px] tablet:mt-[50px] ml-[95px] tablet:ml-[195px] laptop:ml-[calc(clamp(1.071rem,-23.01rem+32.924vw,22.143rem)+180px)] *:w-[14px] flex gap-[20px]"></div>
            </Swiper>
        </section>
    )
})

export default Quotes