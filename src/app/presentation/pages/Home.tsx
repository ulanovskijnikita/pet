import { useLocation } from "react-router";
import Categories from "../sections/categories/Categories";
import Clothing from "../sections/clothing/Clothing";
import Header from "../sections/header/Header";
import { useEffect } from "react";

export default function Home() {

  const location = useLocation()

  useEffect(() => {

    const hash = location.hash

    if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({block: "center"});
    }
  },
  [location])

  return (

    <>

      <Header />

      <main className="grid mt-[50px] tablet:mt-[115px] laptop:mt-[115px] gap-[50px] tablet:gap-[115px] laptop:gap-[125px]">

        <Categories />

        <Clothing />
      </main>
    </>
  )
}