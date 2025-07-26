import { observer } from "mobx-react-lite";
import Nav from "../ui/nav/Nav";
import { Outlet } from "react-router";
import Footer from "../ui/footer/Footer";
import Cookie from "../ui/Cookie";

const Layout = observer(() => {

  return (

    <>
    
      <Nav />

      <main className="grow flex-col flex my-[50px] gap-[30px] laptop:my-[100px] laptop:gap-[50px] desktop:gap-[75px]">

        <Outlet />
      </main>

      <Footer />

      <Cookie />
    </>
  )
})

export default Layout;