import Categories from "../sections/categories/Categories";
import Clothing from "../sections/clothing/Clothing";
import Foodies from "../sections/foodies/Foodies";
import Banner from "../ui/Banner";
import Quotes from "../sections/quotes/Quotes";
import Second from "../sections/Second";
import Photo from "../sections/photo/Photo";
import Location from "../router/Location";
import bannerImg1 from "/decorative/banner/banner-img-1.png"
import Hero from "../sections/hero/Hero";
import { useEffect } from "react";
import { useInjection } from "../context/InversifyContext";
import HomeViewModel from "../viewmodel/HomeViewModel";
import { observer } from "mobx-react-lite";

const Home = () => {

  const vm = useInjection(HomeViewModel)

  useEffect(

    () => {

      vm.setSecondId()
    }
  )

  return (

    <Location>

        <Hero />

        <Categories />

        <Clothing />

        <Foodies />

        <Banner subtitle="Upto 40% off" title="Clearance sale !!!" img={bannerImg1} />

        <Quotes />

        <Second />

        <Photo />
    </Location>
  )
}

export default observer(Home)