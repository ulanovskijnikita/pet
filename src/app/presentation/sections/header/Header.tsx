import { Pagination } from "swiper/modules";
import Nav from "../../ui/nav/Nav";
import {Swiper, SwiperSlide} from "swiper/react";
import headerSlider from "./headerSlider";

export default function Header() {

    return (
        
        <header className="overflow-hidden">
            
            <Nav />

            <Swiper
                className="bg-section tablet:gap-[180px] w-screen!"
                modules={[Pagination]}
                pagination={{
                    
                    clickable: true,
                    el: ".swiper-pagination",                    
                    bulletActiveClass: "swiper-pagination-bullet-active bg-main!",
                    bulletClass: "bg-transparent rounded-full cursor-pointer outline-1 outline-main aspect-square"
                }}
                wrapperClass="laptop:mt-[180px] tablet:mt-[150px] mt-[50px] desktop:mt-[30px]"
            >
                {
                    headerSlider.map(

                        value =>
                            (
                                
                                <SwiperSlide key={value.id} className="px-container laptop:px-container-1024 grid! gap-[15px] tablet:gap-[30px] rounded-full desktop:justify-end">

                                    <img className="absolute w-[33%] tablet:w-[450px] laptop:w-[500px] top-[-35px] tablet:top-[-125px] laptop:top-[-210px] right-container laptop:right-container-1024 -z-1 desktop:top-[75px] desktop:left-[250px]" src={value.img} alt="slide-decorative" />

                                    <p className="text-accent font-functional uppercase desktop:mt-[222px]">{value.subtitle}</p>

                                    <h1 className="capitalize leading-[5rem] w-[max(80%,360px)] tablet:w-[410px] laptop:w-[650px] desktop:w-[700px]" dangerouslySetInnerHTML={{__html: value.title}}/>

                                    <value.link />
                                </SwiperSlide>
                            )
                    )
                }

                <div className="swiper-pagination my-[50px] tablet:mt-[180px] laptop:mt-[80px] desktop:mt-[190px] tablet:mb-[25px] laptop:mb-[45px] bottom-0 *:opacity-100! relative! tablet:justify-center px-container *:w-[14px] flex w-screen! gap-[20px]"></div>
            </Swiper>
        </header>
    )
}