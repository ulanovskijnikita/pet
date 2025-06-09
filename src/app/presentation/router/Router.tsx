import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import History from "../pages/History";
import Profile from "../pages/Profile";
import Favourite from "../pages/Favourite";
import Cart from "../pages/Cart";
import pages from "./pages";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Product from "../pages/Product";

export default function Router() {

    return (

        <BrowserRouter basename={import.meta.env.BASE_URL}>

            <Routes>

                <Route index path={pages.home} element={<Home />} />

                <Route path={pages.shop + '/:productTag?'} element={<Shop />} />

                <Route path={pages.history + '/:cartId?'} element={<History />} />

                <Route path={pages.profile + '/:userId?'} element={<Profile />} >

                    <Route path={pages.register} element={<Register />} />

                    <Route path={pages.signIn} element={<SignIn />} />
                </Route>

                <Route path={pages.favourite + '/:userId'} element={<Favourite />} />

                <Route path={pages.cart + '/:userId'} element={<Cart />} />

                <Route path={pages.product + '/:productId'} element={<Product />} />
            </Routes>
        </BrowserRouter>
    )
}