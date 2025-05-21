import { Swiper, SwiperSlide } from "swiper/react";
import photoContent from "./photoContent";
import { Autoplay } from "swiper/modules";

const Photo = () => {

    return (

        <section className="overflow-hidden">

            <Swiper

                modules={[Autoplay]}
                className="w-screen! overflow-hidden backface-hidden pointer-events-none select-none"
                wrapperClass="grid gap-[15px] ease-linear! backface-hidden"
                slidesPerView={3}
                speed={10000}
                autoplay={{
                    delay: 60,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    waitForTransition: true,
                }}
                noSwiping={true}
                mousewheel={false}
                freeMode={{
                    enabled: false,
                }}
                resistance={false}
                threshold={0}
                breakpoints={{
                    380: {slidesPerView: 3},
                    768: {slidesPerView: 5},
                    1024: {slidesPerView: 6},
                    1920: {slidesPerView: 7},
                }}
            >

                {

                    photoContent.map(

                        photo =>
                            (
                                
                                <SwiperSlide key={photo.id} className="first:ml-[15px] last:mr-[15px] w-[125px]! tablet:w-[165px]! laptop:w-[220px]! desktop:w-[295px]! backface-hidden origin-top-left">

                                    <img src={photo.src} className="rounded-[10px] w-full h-full aspect-square" alt={`photo-decorative-${photo.id}`} />
                                </SwiperSlide>
                            )
                    )
                }
            </Swiper>
        </section>
    )
}

export default Photo