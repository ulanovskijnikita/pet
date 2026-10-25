import Categories from "../../../widgets/categories/ui/Categories";
import Clothing from "../../../widgets/clothing/ui/Clothing";
import Foodies from "../../../widgets/foodies/ui/Foodies";
import Banner from "../../../widgets/banner/ui/Banner";
import Quotes from "../../../widgets/quotes/ui/Quotes";
import Second from "../../../widgets/second/ui/Second";
import Photo from "../../../widgets/photo/ui/Photo";
import Location from "../../../app/router/Location";
import bannerImg1 from "/decorative/banner/banner-img-1.png"
import Hero from "../../../widgets/hero/ui/Hero";
import { observer } from "mobx-react-lite";

const Home = () => {

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