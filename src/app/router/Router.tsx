import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../presentation/pages/Home";
import Shop from "../presentation/pages/Shop";
import History from "../presentation/pages/History";
import Profile from "../presentation/pages/Profile";
import Favourite from "../presentation/pages/Favourite";
import Cart from "../presentation/pages/Cart";
import pages from "./pages";
import Register from "../presentation/pages/Register";
import SignIn from "../presentation/pages/SignIn";
import Product from "../presentation/pages/Product";

export default function Router() {

    return (

        <BrowserRouter>

            <Routes>

                <Route index path={pages.home} element={<Home />} />

                <Route path={pages.shop + '/:productTag?'} element={<Shop />} />

                <Route path={pages.history} element={<History />} />

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