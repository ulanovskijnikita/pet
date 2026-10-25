import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../../pages/home/ui/Home";
import Shop from "../../pages/shop/ui/Shop";
import History from "../../pages/history/ui/History";
import Profile from "../../pages/profile/ui/Profile";
import Favourite from "../../pages/favourite/ui/Favourite";
import Cart from "../../pages/cart/ui/Cart";
import pages from "./pages";
import Register from "../../pages/register/ui/Register";
import SignIn from "../../pages/sign-in/ui/SignIn";
import Product from "../../pages/product/ui/Product";
import Order from "../../pages/order/ui/Order";
import Layout from "./Layout";

export default function Router() {

    return (

        <BrowserRouter basename={import.meta.env.BASE_URL}>

            <Routes>

                <Route path="/" element={<Layout />}>

                    <Route index path={pages.home} element={<Home />} />

                    <Route path={pages.shop + '/:productTag?'} element={<Shop />} />

                    <Route path={pages.history} element={<History />} >
                    
                        <Route path=":orderId" element={<Order />} />
                    </Route>

                    <Route path={pages.profile + '/:userId?'} element={<Profile />} >

                        <Route path={pages.register} element={<Register />} />

                        <Route path={pages.signIn} element={<SignIn />} />
                    </Route>

                    <Route path={pages.favourite + '/:userId'} element={<Favourite />} />

                    <Route path={pages.cart + '/:userId'} element={<Cart />} />

                    <Route path={pages.product + '/:productId'} element={<Product />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}