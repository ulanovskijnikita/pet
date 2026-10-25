import Nav from "../../widgets/nav/ui/Nav";
import { Outlet } from "react-router";
import Footer from "../../widgets/footer/ui/Footer";
import Cookie from "../../shared/ui/Cookie";

const Layout = () => {

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
}

export default Layout;