import Categories from "../sections/categories/Categories";
import Clothing from "../sections/clothing/Clothing";
import Header from "../sections/header/Header";
import Foodies from "../sections/foodies/Foodies";
import Banner from "../ui/Banner";
import Quotes from "../sections/quotes/Quotes";
import Second from "../sections/Second";
import Photo from "../sections/photo/Photo";
import Footer from "../ui/footer/Footer";
import Location from "../../router/Location";

export default function Home() {

  return (

    <Location>

      <Header />

      <main className="grid my-[50px] tablet:my-[115px] laptop:my-[115px] gap-[50px] tablet:gap-[115px] laptop:gap-[125px]">

        <Categories />

        <Clothing />

        <Foodies />

        <Banner subtitle="Upto 40% off" title="Clearance sale !!!" img="/decorative/banner/banner-img-1.png" />

        <Quotes />

        <Second />

        <Photo />
      </main>

      <Footer />
    </Location>
  )
}